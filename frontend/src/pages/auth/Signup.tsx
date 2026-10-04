import AuthLayout from "../../components/auth/AuthLayout";
import DevLioLogo from "../../assets/DevLio.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {
    const navigate = useNavigate();
    const [showSuccess,setShowSuccess] = useState(false);
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        await axios.post("http://localhost:8080/api/auth/signup", {
            username: name,
            gmail: email,
            password: password
        });

        setShowSuccess(true);

        setTimeout(() => {
            navigate("/dashboard");
        }, 2000);

    } catch (error) {
        console.error("Error signing up:", error);
    }
};

 
    return (
        <AuthLayout>
            <div className="w-full max-w-md">

                <div className="mb-8 text-center">
                    <img
                        src={DevLioLogo}
                        alt="DevLio"
                        className="mx-auto mb-6 h-35 w-auto"
                    />
                    <h1 className="text-3xl font-semibold tracking-tight">
                        Create your account
                    </h1>

                    <p className="mt-2 text-sm text-white/60">
                        Join DevLio and build your developer profile.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-7">
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/30" placeholder="Enter your username" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/30" placeholder="Enter your email" required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/30" placeholder="Enter your password" required minLength={8} />
                    </div>

                    <button type="submit" className=" cursor-pointer w-full rounded-lg bg-lime-400 px-4 py-3 text-sm font-semibold text-black transition hover:bg-lime-400/90 ">
                        Sign Up
                    </button>
                </form>

            </div>
            {showSuccess && (
                <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#18191b] px-5 py-3 shadow-xl">

                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-400 text-sm font-bold text-black">
                            ✓
                        </div>

                        <span className="text-sm font-medium text-white">
                            Account created successfully
                        </span>

                        <button
                            type="button"
                            onClick={() => setShowSuccess(false)}
                            className="ml-2 text-white/40 transition hover:text-white"
                        >
                            ×
                        </button>

                    </div>
                </div>
            )}
        </AuthLayout>
    );
}

export default Signup;