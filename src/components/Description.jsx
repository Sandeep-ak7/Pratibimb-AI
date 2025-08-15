import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Description = () => {
    return (
        <motion.div 
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

        className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2 '>Create AI Images</h1>
            <p className='text-gray-500 mb-8'>Turn Your Imagination Into Visuals</p>
            <div className='flex flex-col justify-center md:gap-14 md:flex-row items-center'>
                <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />
                <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4 '>Intoducing AI-Powered Text to Image Generator</h2>
                <p className='text-gray-600 mb-4'>Transform your ideas into stunning visuals with our AI-powered text to image generator. Simply enter a description, and watch as the AI creates unique images that bring your concepts to life.</p>
                <p className='text-gray-600'>Whether you're a designer, marketer, or just looking to explore your creativity, our tool makes it easy to generate high-quality images in seconds. No design skills required!</p>
                </div>
            </div>


        </motion.div>
    )
}

export default Description
