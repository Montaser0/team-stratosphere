
import { useState } from "react";
import { contactsData as initialContactsData } from "@/data/mockData";
import { Edit, Plus, Search, Trash } from "lucide-react";

const Contacts = () => {
  const [contacts, setContacts] = useState(initialContactsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddingContact, setIsAddingContact] = useState(false);
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    status: "active",
  });

  // Filter contacts based on search term
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddContact = () => {
    if (newContact.name && newContact.email && newContact.phone) {
      const contact = {
        id: contacts.length + 1,
        name: newContact.name,
        email: newContact.email,
        phone: newContact.phone,
        company: newContact.company,
        status: newContact.status,
      };
      setContacts([...contacts, contact]);
      setNewContact({ name: "", email: "", phone: "", company: "", status: "active" });
      setIsAddingContact(false);
    }
  };

  const handleDeleteContact = (id: number) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="page-transition">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Contacts</h1>
        <p className="text-muted-foreground mt-1">Manage your contacts information</p>
      </div>

      <div className="bg-card rounded-xl border animate-scaleIn">
        <div className="p-4 border-b flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search contacts..."
              className="h-9 w-full md:w-[300px] rounded-md border border-input bg-background pl-8 pr-4 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <button
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md flex items-center gap-1.5 text-sm"
            onClick={() => setIsAddingContact(true)}
          >
            <Plus size={16} />
            <span>Add Contact</span>
          </button>
        </div>

        {isAddingContact && (
          <div className="p-4 border-b bg-muted/50 animate-scaleIn">
            <h3 className="font-semibold mb-3">Add New Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={newContact.name}
                  onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={newContact.email}
                  onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={newContact.phone}
                  onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Company</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={newContact.company}
                  onChange={(e) => setNewContact({ ...newContact, company: e.target.value })}
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 rounded-md border text-sm"
                onClick={() => setIsAddingContact(false)}
              >
                Cancel
              </button>
              <button
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm"
                onClick={handleAddContact}
              >
                Add Contact
              </button>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold text-sm">Name</th>
                <th className="px-4 py-3 text-left font-semibold text-sm">Email</th>
                <th className="px-4 py-3 text-left font-semibold text-sm">Phone</th>
                <th className="px-4 py-3 text-left font-semibold text-sm">Company</th>
                <th className="px-4 py-3 text-left font-semibold text-sm">Status</th>
                <th className="px-4 py-3 text-right font-semibold text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map((contact) => (
                <tr key={contact.id} className="border-b last:border-b-0 hover:bg-muted/25 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {contact.name.charAt(0)}
                      </div>
                      <span className="font-medium">{contact.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">{contact.email}</td>
                  <td className="px-4 py-3 text-sm">{contact.phone}</td>
                  <td className="px-4 py-3 text-sm">{contact.company}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        contact.status === "active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                          : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                      }`}
                    >
                      {contact.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1 rounded-md hover:bg-muted">
                        <Edit size={16} />
                      </button>
                      <button 
                        className="p-1 rounded-md hover:bg-muted"
                        onClick={() => handleDeleteContact(contact.id)}
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

export default Contacts;
