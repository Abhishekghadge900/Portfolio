import { useState ,useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { apiConnector } from "../apiConnector";
import {contactusEndpoint} from "../api";

function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm();


  const submitContactForm = async (data) => {

    try{
      setLoading(true);
      const response = await apiConnector(
        "Post",
        contactusEndpoint.CONTACT_US_API,
        data
      )

      if(!response?.data?.success){
        setLoading(false);
        setSubmitStatus({
          sucess:false,
          message: response?.data?.message || "Failed to send message."
        });
        return ;
      }
      setLoading(false);
      setSubmitStatus({ success: true, message: "Message sent successfully!" });
    }
    catch (error) {
      setLoading(false);
      setSubmitStatus({ success: false, message: "Failed to send message." });
      console.error("Error submitting form:", error);
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        email: "",
        message: "",
      });
    }
  },[isSubmitSuccessful, reset]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-black to-gray-900 px-4 sm:px-6 py-16">

      <div className="w-full max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 relative">
          Contact Me ☎️
          <div className="absolute w-20 h-1 bg-blue-600 bottom-0 left-1/2 transform -translate-x-1/2 -mb-4"></div>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Email</h3>
                <p className="text-white">a3148700@gmail.com</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Location</h3>
                <p className="text-white">Pune,Maharashtra</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Social</h3>
                <div className="flex gap-4">
                  <a href="https://github.com/Abhishekghadge900" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition-colors">
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/abhishek-ghadge-3857032a0" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit(submitContactForm)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-blue-600 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  {...register("name", { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-blue-600 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("email", { required: true })}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-blue-600 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("message", { required: true })}
                />
              </div>
              
              <button 
                type="submit" 
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:cursor-pointer"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus && (
                <div className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;