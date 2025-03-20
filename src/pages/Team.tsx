
import { useState } from "react";
import { teamMembers as initialTeamMembers } from "@/data/mockData";
import { Edit, Plus, Search, Trash } from "lucide-react";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    email: "",
    status: "active",
  });

  // Filter team members based on search term
  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddMember = () => {
    if (newMember.name && newMember.role && newMember.email) {
      const member = {
        id: teamMembers.length + 1,
        name: newMember.name,
        role: newMember.role,
        email: newMember.email,
        imageUrl: "",
        dateJoined: new Date().toISOString().split("T")[0],
        status: newMember.status,
      };
      setTeamMembers([...teamMembers, member]);
      setNewMember({ name: "", role: "", email: "", status: "active" });
      setIsAddingMember(false);
    }
  };

  const handleDeleteMember = (id: number) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id));
  };

  return (
    <div className="page-transition">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Team Members</h1>
        <p className="text-muted-foreground mt-1">Managing your team members</p>
      </div>

      <div className="bg-card rounded-xl border animate-scaleIn">
        <div className="p-4 border-b flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search team members..."
              className="h-9 w-full md:w-[300px] rounded-md border border-input bg-background pl-8 pr-4 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <button
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md flex items-center gap-1.5 text-sm"
            onClick={() => setIsAddingMember(true)}
          >
            <Plus size={16} />
            <span>Add Member</span>
          </button>
        </div>

        {isAddingMember && (
          <div className="p-4 border-b bg-muted/50 animate-scaleIn">
            <h3 className="font-semibold mb-3">Add New Team Member</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={newMember.name}
                  onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Role</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={newMember.role}
                  onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={newMember.email}
                  onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={newMember.status}
                  onChange={(e) => setNewMember({ ...newMember, status: e.target.value })}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 rounded-md border text-sm"
                onClick={() => setIsAddingMember(false)}
              >
                Cancel
              </button>
              <button
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm"
                onClick={handleAddMember}
              >
                Add Member
              </button>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold text-sm">Name</th>
                <th className="px-4 py-3 text-left font-semibold text-sm">Role</th>
                <th className="px-4 py-3 text-left font-semibold text-sm">Email</th>
                <th className="px-4 py-3 text-left font-semibold text-sm">Date Joined</th>
                <th className="px-4 py-3 text-left font-semibold text-sm">Status</th>
                <th className="px-4 py-3 text-right font-semibold text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member) => (
                <tr key={member.id} className="border-b last:border-b-0 hover:bg-muted/25 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {member.imageUrl ? (
                          <img 
                            src={member.imageUrl} 
                            alt={member.name} 
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          member.name.charAt(0)
                        )}
                      </div>
                      <span className="font-medium">{member.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">{member.role}</td>
                  <td className="px-4 py-3 text-sm">{member.email}</td>
                  <td className="px-4 py-3 text-sm">{member.dateJoined}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        member.status === "active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                          : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1 rounded-md hover:bg-muted">
                        <Edit size={16} />
                      </button>
                      <button 
                        className="p-1 rounded-md hover:bg-muted"
                        onClick={() => handleDeleteMember(member.id)}
                      >
                        <Trash size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Team;
