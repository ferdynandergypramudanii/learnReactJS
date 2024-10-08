import React, { useState } from "react";
import "./UserStatus.css";

function UserStatus({ name }) {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <div className="UserStatus">
      <div className="child">
        {status ? (
          <h1>You are Online {name}</h1>
        ) : (
          <h1>You Are Offline {name}</h1>
        )}
        <button id="btn" onClick={toggleStatus}>
          {status ? "Go Offline" : "Go Online"}
        </button>
      </div>
    </div>
  );
}

export default UserStatus;

{
  /*
Challenge:

1. Komponen: Buat komponen bernama `UserStatus`.
2. State: Gunakan state untuk melacak apakah pengguna online atau offline.
3. Tampilan:
    - Jika pengguna online, tampilkan pesan "You are online!" dengan latar belakang hijau.
    - Jika pengguna offline, tampilkan pesan "You are offline!" dengan latar belakang merah.
4. Tombol: Sertakan tombol yang dapat mengubah status pengguna antara online dan offline. Label tombol harus "Go Online" jika pengguna offline dan "Go Offline" jika pengguna online.
5. Styling: Tambahkan beberapa styling dasar untuk membedakan tampilan online dan offline.
*/
}
