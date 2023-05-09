import profilePic from '../assets/profilePic.jpg';

const data = {
    userName: 'James V.',
    channelName: 'Front-End Group',
    activeUsers: '46k',
    totalUsers: '78k',
};

const ProfileInformation = () => {
    return (
        <div className="flex flex-col gap-3 justify-center items-center">
            <img
                className="border-gray-200 border-[12px] rounded-full h-[150px] w-[150px] object-cover"
                src={profilePic}
                alt=""
            />
            <h4 className="font-noral">{data.userName} invited you to join</h4>
            <h1 className="font-bold text-2xl">{data.channelName}</h1>
            <p className="bg-gray-100 p-4 rounded-lg">
                <span className="">{data.activeUsers} Active users </span>

                <span className="mx-1">{data.totalUsers} Total User</span>
            </p>
        </div>
    );
};
export default ProfileInformation;
