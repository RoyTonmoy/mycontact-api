//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getContacts = (req, res) => {
    res.status(200).json({ message: "All contacts Get method" });
};

//@desc Get contacts by id
//@route Get /api/contacts/:id
//@access public

const getContactById = (req, res) => {
    res.status(200).json({ message: `Get contact by ${req.params.id}` });
};

//@desc Create new contact
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
    console.log("The request boday is ", req.body);
    const { name, email, phone } = req.body

    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory!!");
    }
    res.status(201).json({ message: "Contacts created" });
};

//@desc update contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
    res.status(200).json({ message: `Contact updated for ${req.params.id}` });
};

//@desc delete contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
    res.status(200).json({ message: `Contact deleted for ${req.params.id}` });
};

module.exports = {
    getContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
}

