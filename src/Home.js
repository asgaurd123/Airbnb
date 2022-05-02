import React from 'react'
import Card from './Card'
import Header from './Header'
import './Home.css'
import Banner from './Banner'




function Home() {
    return (
        <div className='home'>

            <Banner />
            <div className="home__section">
                <Card
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-29172819/original/8dae018e-ee08-4956-ab90-4a451e96e424.jpeg?im_w=720"
                    title="Minh Phu Ha Noi"
                    price="₹7683"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, repellat?
                    " />
                <Card
                    src="https://a0.muscache.com/im/pictures/23191485-b4aa-41ad-9011-516cb50215d6.jpg?im_w=720"
                    title="Tree house | Duplex | Balcony With Himalayan View"
                    price="₹4,033"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, repellat?"
                />
                <Card
                    src='https://a0.muscache.com/im/pictures/aab9bec6-8626-47a0-8718-7d8cc131da48.jpg?im_w=960'
                    title="Khaoyai TreeHouse"
                    price="₹11,013"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, repellat?"

                />
            </div>

            <div className="home__section">
                <Card
                    src="https://a0.muscache.com/im/pictures/f1a038ce-3a3c-4ef8-8f6f-f91d4ba72de4.jpg?im_w=960"
                    title="PM Villas Lonavala"
                    price="₹26,000"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, repellat?
                    " />
                <Card
                    src="https://a0.muscache.com/im/pictures/e066973a-4494-4a96-92dc-feda9561025a.jpg?im_w=960"
                    title="Le soleil -Beach View Fan Room"
                    price="₹3,024"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, repellat?
                    " />
                <Card
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?im_w=960"
                    title="Whispering Pines Cottages|Treehouse|Tandi"
                    price="₹5,999"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, repellat?
                    " />
            </div>
            

        </div>
    )
}

export default Home