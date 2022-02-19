function ProfilePage() {
    return (
        <div className="flex flex-col px-2">
            <label className="block mb-2 text-sm font-medium">Your email</label>
            <input type="text" className="w-full block p-2.5 bg-gray-50 border border-gray-200 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="name@email.com" required />
        </div>
    )
}

export default ProfilePage
