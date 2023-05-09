import { FormEvent, useState } from 'react';
import InvitationForm from './components/InvitationForm';
import ProfileInformation from './components/ProfileInformation';

function App() {
    const [submit, setSubmit] = useState(false);

    return (
        <main className="main">
            <div className="flex flex-col w-[550px] bg-slate-50 pt-10 rounded-lg shadow-lg">
                {submit ? (
                    <div className="text-center p-10 pb-20">
                        Thank you for joining our group
                    </div>
                ) : (
                    <>
                        <ProfileInformation />
                        <InvitationForm setSubmit={setSubmit} />
                    </>
                )}
            </div>
        </main>
    );
}

export default App;
