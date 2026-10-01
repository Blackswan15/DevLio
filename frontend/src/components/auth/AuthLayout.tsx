import AuthHeader from "./AuthHeader";
function AuthLayout({ children }){
    return(
        <div className="min-h-screen bg-[#8090a] text-white">
            <AuthHeader />
            <main className="flex min-h-[calc(100vh-15rem)] items-center justify-center px-4">
                {children}
            </main>
        </div>
    );
}
export default AuthLayout;