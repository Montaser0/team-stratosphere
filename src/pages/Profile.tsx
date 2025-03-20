
import { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "Montaser",
    lastName: "Haj Omar",
    email: "montaser@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "USA",
    bio: "Website Administrator with experience in managing digital platforms and optimizing user experiences.",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit the data to an API
    setIsEditing(false);
  };

  return (
    <div className="page-transition">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground mt-1">Manage your personal information</p>
      </div>

      <div className="bg-card rounded-xl border animate-scaleIn">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <button
            className={`px-4 py-2 rounded-md text-sm ${
              isEditing
                ? "bg-muted hover:bg-muted/80"
                : "bg-primary text-primary-foreground"
            }`}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="flex items-center mb-6">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl font-semibold mr-4">
              {formData.firstName.charAt(0)}
              {formData.lastName.charAt(0)}
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                {formData.firstName} {formData.lastName}
              </h3>
              <p className="text-muted-foreground">{formData.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                value={formData.firstName}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                value={formData.lastName}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                value={formData.email}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                value={formData.phone}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                name="address"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                value={formData.address}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                name="city"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                value={formData.city}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">State</label>
              <input
                type="text"
                name="state"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                value={formData.state}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">ZIP Code</label>
              <input
                type="text"
                name="zip"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                value={formData.zip}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Bio</label>
              <textarea
                name="bio"
                rows={4}
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                value={formData.bio}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
          </div>

          {isEditing && (
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
              >
                Save Changes
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
