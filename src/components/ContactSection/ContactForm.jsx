import React from 'react';
import { Button } from "@/components/ui/button.jsx";
import {useFormik} from "formik";
import {IoDocumentTextOutline} from "react-icons/io5";
import {BiPaperPlane} from "react-icons/bi";

const ContactForm = () => {
    let formik=useFormik({
        initialValues: {
            name: "",
            email: "",
            query: "",
        },
        onSubmit: async values => {
            try {
                const response = await fetch('https://formspree.io/f/xeqynjvp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });
                if (response.ok) {
                    console.log('Form submitted successfully');
                    // Display confirmation message to the user
                } else {
                    console.error('Form submission failed:', response.statusText);
                    // Display error message to the user
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                // Display error message to the user
            }
        },
    })
    console.log(formik.values)
    return (
        <div id="contact" className="w-full flex flex-col justify-center items-center">
            <div className=" w-full h-full flex flex-col justify-center items-center">
                <h2 className="mb-5 text-lg text-titleColor font-[500]">
                    Write me your project
                </h2>
                <form onSubmit={formik.handleSubmit} className="w-full">
                    <div className="mb-6">
                        <input
                            name="name"
                            type="text"
                            className="block w-full px-3 py-4 rounded-xl border-2 border-textColor focus:border-primary focus:ring-primary focus:ring-opacity-50 dark:bg-transparent dark:text-white dark:border-gray-600 dark:focus:border-primary dark:focus:ring-primary dark:focus:ring-opacity-50"
                            id="exampleInput90"
                            placeholder="Insert your name"
                            {...formik.getFieldProps("name")}
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            name="email"
                            type="email"
                            className="block w-full px-3 py-4 rounded-xl border-2 border-textColor focus:border-primary focus:ring-primary focus:ring-opacity-50 dark:bg-transparent dark:text-white dark:border-gray-600 dark:focus:border-primary dark:focus:ring-primary dark:focus:ring-opacity-50"
                            id="exampleInput91"
                            placeholder="Insert your email"
                            {...formik.getFieldProps("email")}
                        />
                    </div>
                    <div className="mb-6">
                        <textarea
                            name="query"

                            className="block w-full px-3 py-4 rounded-xl border-2 border-textColor focus:border-textColor"
                            id="exampleFormControlTextarea1"

                            rows="6"
                            placeholder="Write your project"
                            {...formik.getFieldProps("query")}
                        ></textarea>
                    </div>
                    <div className="mb-8">
                        <Button
                            type="submit"
                            disabled={formik.isSubmitting}
                            className=" bg-gray-800 text-white font-poppins rounded-xl py-7 px-7">
                            Send Massage <BiPaperPlane  className="ml-3 text-2xl"/>
                        </Button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ContactForm;
