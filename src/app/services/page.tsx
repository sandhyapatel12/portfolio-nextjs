import React from 'react';

interface Service {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

const services: Service[] = [
    {
        id: 1,
        title: 'Web Development',
        description: 'Expertise in front-end technologies such as HTML5, CSS3, and JavaScript, combined with cutting-edge frameworks like React, Next.js.',
        imageUrl: '/services/code.png',
    },
    {
        id: 2,
        title: 'Responsive Design',
        description: 'Creating fully responsive websites that adapt to different screen sizes and devices for a seamless user experience.',
        imageUrl: '/services/responsive.png',
    },
    {
        id: 3,
        title: 'API Integration',
        description: 'Connecting frontend applications with external APIs for real-time data fetching, payments, and third-party integrations',
        imageUrl: '/services/api.png',
    },
];

const Services = () => {
    return (
        <>
            <section className='min-h-screen flex items-center justify-center'>

                <div className="mt-20">

                    <div className='max-w-5xl mx-auto  flex px-10 space-x-3 '>
                        <div className='bg-green-600 h-8 w-2 rounded-md'></div>
                        <div className='text-xl font-bold'>Services </div>
                    </div>

                    <div className="container mx-auto py-16 max-w-5xl px-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {services.map(service => (
                                <div
                                    key={service.id}
                                    className="group relative p-6 bg-transparent border border-gray-300 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                >
                                    {/* Image Section */}
                                    <div className="relative flex items-center justify-center h-48 w-full">
                                        <img
                                            src={service.imageUrl}
                                            alt={service.title}
                                            className="h-28 w-28 object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                    </div>
                                    {/* Content Section */}
                                    <div className="mt-4">
                                        <h2 className="text-2xl text-gray-300 font-bold mb-2">{service.title}</h2>
                                        <p className="text-gray-400 text-base">{service.description}</p>
                                    </div>
                                    {/* Animation: subtle movement */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
