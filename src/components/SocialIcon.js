
function SocialIcon({icon: Icon}) {
    return ( 
        <div className="w-[30px] h-[30px] border border-white rounded-full flex justify-center items-center">
            <Icon />
        </div>
    );
}

export default SocialIcon;