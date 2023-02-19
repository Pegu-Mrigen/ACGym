import Logo from '@/assets/Logo.png'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-primary-100 py-16'>

<div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
    <div className='mt-16 basis-1/2 ms:mt-0'>
        <img src={Logo} alt="Logo" />
        <p className='my-5'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nulla cupiditate quasi vero. Voluptates inventore expedita praesentium laudantium illo ipsam, commodi odio corrupti odit eos.
        </p>
        <p>@ ACGym All Rights Reserved. </p>
        
    </div>
    <div className='mt-16 basis-1/4 md:mt-0'>
        <h4 className='font-bold'>Links</h4>
        <p className='my-5'>Lorem ipsum dolor sit amet.</p>
        <p className='my-5'>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit.</p>

    </div>
    <div className='mt-16 basis-1/4 md:mt-0'>
        <h4 className='font-bold'>Links</h4>
        <p className='my-5'>Lorem, ipsum dolor.</p>
        <p>(12) 3456-7890</p>
        

    </div>


</div>
    </footer>
  )
}

export default Footer