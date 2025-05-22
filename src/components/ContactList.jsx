import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  deleteContact } from "../redux/contactsSlice";
import { MdAccountCircle } from "react-icons/md";

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul className="space-y-3 mt-4">
      {filtered.map(({ id, name, number }) => (
        <li
          key={id}
          className="bg-white  p-4 rounded-xl flex items-center justify-between transition border"
        >
          <div className="flex items-center space-x-3">
            <MdAccountCircle className="text-[40px] text-blue-500" />
            <div>
              <p className="text-lg font-semibold text-gray-800">{name}</p>
              <p className="text-sm text-gray-500">{number}</p>
            </div>
          </div>
          <button
            className="bg-red-500 hover:bg-red-600 transition text-white rounded-full px-4 py-1 text-sm font-medium"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
