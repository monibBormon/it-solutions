import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const ServiceDetails = () => {
    const { title } = useParams()
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`/services.json`)
            .then(res => res.json())
            .then(data => {
                data?.filter(service => service.title === title)?.map(service => setService(service))
            })
    }, [])

    return (
        <div>
            <div className="container mx-auto py-14 px-5 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="details-image">
                        <img src={service.img} alt="service-details" />
                    </div>
                    <div className="details-box p-5">
                        <h2 className='text-4xl mb-5'>{service.title}</h2>
                        <p>{service.text}</p>
                        <HashLink smooth to={`/#services`}>
                            <button className='mt-10 border-2 border-purple-300 px-5 py-1 rounded'>Back to Services</button>
                        </HashLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;