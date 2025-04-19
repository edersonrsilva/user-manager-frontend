import React, { useState } from 'react';
import { UserList } from './components/UserList';
import { UserForm } from './components/UserForm';
import { User } from './types/user';
import { userService } from './services/userService';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | undefined>();
  const [error, setError] = useState<string | null>(null);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setIsFormOpen(true);
  };

  const handleCreate = () => {
    setSelectedUser(undefined);
    setIsFormOpen(true);
  };

  const handleSubmit = async (user: User) => {
    try {
      if (selectedUser?.id) {
        await userService.updateUser(selectedUser.id, user);
      } else {
        await userService.createUser(user);
      }
      setIsFormOpen(false);
      setSelectedUser(undefined);
      setError(null);
      const timestamp = new Date().getTime();
      setListKey(timestamp);
    } catch (err) {
      setError('Failed to save user');
    }
  };

  const [listKey, setListKey] = useState<number>(0);

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg p-6 h-full">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">User Manager</h1>
            <button
              onClick={handleCreate}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add New User
            </button>
          </div>

          {error && (
            <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {isFormOpen ? (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {selectedUser ? 'Edit User' : 'Create User'}
                  </h2>
                  <button
                    onClick={() => {
                      setIsFormOpen(false);
                      setSelectedUser(undefined);
                    }}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <UserForm
                  user={selectedUser}
                  onSubmit={handleSubmit}
                  onCancel={() => {
                    setIsFormOpen(false);
                    setSelectedUser(undefined);
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="h-full">
              <UserList key={listKey} onEdit={handleEdit} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
