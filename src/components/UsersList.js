import React, { useState } from 'react';
import UserPreview from './UserPreview';
import UserDetailsModal from './UserDetailsModal';

/**
 * It renders the list of users and displays the user details (Modal)
 * @param {Object} users - The list of users to display
 */
const UsersList = ({ users }) => {
  // State contains the user details or null
  const [showUserDetails, showUserModal] = useState(null);

  const handleShowUserModal = (user) => () => showUserModal(user);
  const handleCloseModal = () => showUserModal(null);

  return (
    <>
      {users.map((user) => {
        const {
          email,
          login: { username },
        } = user;

        return (
          <div
            data-testid="user-preview-wrapper"
            role="button"
            tabIndex={0}
            key={email + username}
            onClick={handleShowUserModal(user)}
            onKeyPress={handleShowUserModal(user)}
          >
            <UserPreview user={user} />
          </div>
        );
      })}
      {showUserDetails ? (
        <UserDetailsModal
          isOpen={showUserDetails !== null}
          user={showUserDetails}
          onClose={handleCloseModal}
        />
      ) : null}
    </>
  );
};

export default UsersList;
