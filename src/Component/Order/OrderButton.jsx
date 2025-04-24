'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { placeOrder } from '@/features/orderSlice';
import Swal from 'sweetalert2';
import Loading from '@/Loading/Loading';

const OrderModal = ({ product }) => {

    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    const [customer, setCustomer] = useState({
        name: '',
        phone: '',
        address: '',
        courier: 'steadfast',
        s_product_qty: '',
    });

    // To place order 

    const handlePlaceOrder = async () => {
        const orderData = {
            product_ids: String(product.id),
            s_product_qty: customer.s_product_qty,
            c_phone: customer.phone,
            c_name: customer.name,
            courier: customer.courier,
            address: customer.address,
            advance: null,
            cod_amount: String(product.price),
            discount_amount: null,
            delivery_charge: '180',
        };

        const result = await dispatch(placeOrder(orderData));

        if(placeOrder.pending.match(result)) return <Loading/>

        if (placeOrder.fulfilled.match(result)) {
            Swal.fire({
                title: "Well Done!",
                text: "Your order successfully placed!",
                icon: "success"
            });
            setIsOpen(false);
        } 
        else {
            Swal.fire({
                title: "Sorry!",
                text: "No order placed!",
                icon: "error"
            });
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="px-8 border border-gray-500 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white transition"
            >
                Place Order
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                    {/* Background */}
                    <Transition
                        show={isOpen}
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            {/* Modal Content */}
                            <Transition
                                show={isOpen}
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
                                    <Dialog.Title className="text-lg font-bold text-gray-800">
                                        Confirm Your Order
                                    </Dialog.Title>

                                    <div className="mt-4 space-y-3">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="border p-2 w-full rounded"
                                            onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Phone"
                                            className="border p-2 w-full rounded"
                                            onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Address"
                                            className="border p-2 w-full rounded"
                                            onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Product Quantity"
                                            className="border p-2 w-full rounded"
                                            onChange={(e) => setCustomer({ ...customer, s_product_qty: e.target.value })}
                                        />
                                        <button
                                            onClick={handlePlaceOrder}
                                            className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
                                        >
                                            Confirm Order
                                        </button>
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="w-full py-2 text-sm text-gray-500 hover:text-gray-800"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </>
    );
};

export default OrderModal;
