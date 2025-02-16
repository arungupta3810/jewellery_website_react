import Facebook from '../../Assets/Images/fb.svg'
import Whatsapp from '../../Assets/Images/whatsapp.svg'
import Instagram from '../../Assets/Images/instagram.svg'
import Youtube from '../../Assets/Images/youtube.svg'
import { ArrowUpOutlined } from '@ant-design/icons'

export const SocialMediaComponent = ({header}) => {
    const phoneNumber = "8652864081"
    const socialMedia = [
        {
            id: 1,
            component: Facebook,
            name: 'facebook',
            url: 'https://www.facebook.com',
        },
        {
            id: 2,
            component: Instagram,
            name: 'instagram',
            url: 'https://www.instagram.com',
        },
        {
            id: 3,
            component: Youtube,
            name: 'youtube',
            url: 'https://www.youtube.com',
        },
        {
            id: 4,
            name: 'whatsapp',
            component: Whatsapp,
            url: `https://api.whatsapp.com/send/?phone=%2B91${phoneNumber}&text&type=phone_number&app_absent=0`,
        }
    ]
    return (
        <>
    {socialMedia?.map((e,index)=>
        <a key={index} target='_blank' href={e?.url}><img src={e?.component} alt={e?.name} width={35} height={35}/></a>
    )}
    {header && 
    <><br/>
    <b><span>Follow us here</span></b>
    </>}
    </>)
}

export const GotoTopArrow = ({scrollPercent,onClick}) => {
    return(
        <div className="arrow" onClick={onClick}>
            {/* <Progress type="circle" percent={scrollPercent} size={'small'}/> */}
            <ArrowUpOutlined />
        </div>
    )
}

export const ScrollToTop = (behavior) => {
    window.scrollTo({
        top: 0,
        behavior: behavior
      });
}