import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FormEvent } from 'react';

type InvitationFormProps = {
    setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
};

const InvitationForm = ({ setSubmit }: InvitationFormProps) => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmit((prev) => !prev);
    };
    return (
        <div className="mx-[100px] my-5">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <label>Username: </label>
                    <input
                        type="text"
                        placeholder="How do you like people to call you?"
                        className="p-4 border-pink-100 border-2 rounded-lg outline-pink-500"
                        required
                    />
                </div>
                <div className="flex flex-col mt-5">
                    <label
                        htmlFor="checkbox1"
                        className=" cursor-pointer relative flex"
                    >
                        <input
                            type="checkbox"
                            id="checkbox1"
                            className="appearance-none h-7 w-10 border-2 border-pink-100 rounded-md"
                            required
                        />
                        <FontAwesomeIcon
                            icon={faCheck}
                            className="text-2xl h-7 w-7 text-pink-400 absolute left-0 top-0 text-opacity-0 check-1 "
                        />
                        <p className="px-2">
                            I have read and agree to the{' '}
                            <span className="text-pink-600 underline">
                                Terms of service
                            </span>{' '}
                            and{' '}
                            <span className="text-pink-600 underline">
                                Privacy policy
                            </span>
                            .
                        </p>
                    </label>
                </div>
                <button
                    className="bg-pink-700 w-[100%] text-white p-4 rounded-md mt-5"
                    type="submit"
                >
                    Continue
                </button>
            </form>
            <p className="text-pink-600 underline text-center my-6 font-semibold">
                Already have an count
            </p>
        </div>
    );
};
export default InvitationForm;
