import React from 'react';
import Icon1 from '../../../Assets/Icon/Icon01.gif'
import Icon2 from '../../../Assets/Icon/Icon02.gif'
import Icon3 from '../../../Assets/Icon/Icon03.gif'
import Icon4 from '../../../Assets/Icon/Icon04.gif'
import Icon5 from '../../../Assets/Icon/Icon05.gif'
import Icon6 from '../../../Assets/Icon/Iocn06.gif'
import Icon7 from '../../../Assets/Icon/Icon07.gif'
import Icon8 from '../../../Assets/Icon/Icon08.gif'
import DigitalFutureCardSection from './DigitalFutureCardSection';

const DigitalFutureDataSection = () => {
    const FutureData = [
        {
            id: 1,
            img: Icon1,
            name: 'Web Development',
            para: 'Creating Custom Design to WordPress them and plugin customization, WordPress'

        },
        {
            id: 2,
            img: Icon2,
            name: 'Ecommerce Development',
            para: 'Expert e-commerce development services to build robust online stores.'

        },
        {
            id: 3,
            img: Icon3,
            name: 'Content Writing',
            para: 'Content Writing: Compelling, concise, and tailored content for websites, blogs,'

        },
        {
            id: 4,
            img: Icon4,
            name: 'Network & System Administration',
            para: 'Network monitoring and management Help desk and technical support Proactive'

        },
        {
            id: 5,
            img: Icon5,
            name: 'Database Management & Administration',
            para: 'Comprehensive DB management & admin services Design, setup, security, optimization,'

        },
        {
            id: 6,
            img: Icon6,
            name: 'Customer Service & Tech Support',
            para: 'Reliable technical support & services for seamless IT operations.'

        },
        {
            id: 7,
            img: Icon7,
            name: 'Digital Marketing',
            para: 'Strategic digital marketing solutions to boost online presence and drive growth'

        },
        {
            id: 8,
            img: Icon8,
            name: 'Graphic, Editorial & Presentation Design',
            para: 'Network monitoring and management Help desk and technical support'

        },
    ]
    return (
        <div className=' -mt-32'>
            <div className=' max-w-[1130px] mx-auto xm:px-4 xm1:px-4 xm2:px-4 xm3:px-4 xm4:px-4 sm:px-4 sm1:px-4 md:px-4 md1:px-4 md2:px-4 lg:px-4 lg1:px-4'>
                <div className=' grid xm:grid-cols-1 xm1:grid-cols-1 xm2:grid-cols-1 xm3:grid-cols-1 xm4:grid-cols-1 sm:grid-cols-2 sm1:grid-cols-2 md:grid-cols-2   md1:grid-cols-2 md2:grid-cols-3 lg:grid-cols-3 lg1:grid-cols-3 grid-cols-4 gap-5'>
                    {
                        FutureData.map(future => <DigitalFutureCardSection
                            key={future.id}
                            future={future}
                        ></DigitalFutureCardSection>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DigitalFutureDataSection;