import React, { useEffect } from "react";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/admin-panel.css";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import { BsFillCaretDownFill } from "react-icons/bs";
import transaction from "../data/transaction.json";

function AdminPanel() {
  useEffect(() => {
    console.log(transaction);
  }, []);

  return (
    <div style={{ background: "black", height: "90.5vh" }}>
      <div className="container">
        <h3 className="text-white py-4">Incoming Transaction</h3>
        <Table striped hover>
          <thead>
            <tr style={{ background: "#1F1F1F", color: "red" }}>
              <th>No</th>
              <th>Users</th>
              <th>Bukti Transfer</th>
              <th>Remaining Active</th>
              <th>Status User</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transaction.map((item) => {
              return (
                <tr style={{ background: "#2B2B2B" }}>
                  <td className="text-white">{item.id}</td>
                  <td className="text-white">{item.name}</td>
                  <td className="text-white">{item.image}</td>
                  <td className="text-white">{item.Day}</td>
                  <td style={{ color: "green" }}>Active</td>
                  <td style={{ color: "green" }}>Approve</td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <BsFillCaretDownFill style={{ color: "#42cef5" }} />
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{ background: "#2B2B2B" }}>
                        <Dropdown.Item style={{ color: "green" }}>
                          Approve
                        </Dropdown.Item>
                        <Dropdown.Item style={{ color: "red" }}>
                          Cancel
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              );
            })}

            {/* <tr style={{background: "#1F1F1F"}}>
          <td className='text-white'>2</td>
          <td className='text-white'>Ilham</td>
          <td className='text-white'>bni.jpg</td>
          <td className='text-white'>26/Hari</td>
          <td style={{color: "green"}}>Active</td>
          <td style={{color: "green"}}>Approve</td>
          <td>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            <BsFillCaretDownFill style={{color: "#42cef5"}}/>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{background: "#2B2B2B"}}>
              <Dropdown.Item style={{color: "green"}}>Approve</Dropdown.Item>
              <Dropdown.Item style={{color: "red"}}>Cancel</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </td>
        </tr>

        <tr style={{background: "#2B2B2B"}}>
          <td className='text-white'>3</td>
          <td className='text-white'>samsul</td>
          <td className='text-white'>bca.jpg</td>
          <td className='text-white'>15/Hari</td>
          <td style={{color: "red"}}>Not Active</td>
          <td style={{color: "red"}}>Cancel</td>
          <td>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            <BsFillCaretDownFill style={{color: "#42cef5"}}/>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{background: "#2B2B2B"}}>
              <Dropdown.Item style={{color: "green"}}>Approve</Dropdown.Item>
              <Dropdown.Item style={{color: "red"}}>Cancel</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </td>
        </tr>

        <tr style={{background: "#1F1F1F"}}>
          <td className='text-white'>4</td>
          <td className='text-white'>Jodi</td>
          <td className='text-white'>bca.jpg</td>
          <td className='text-white'>26/Hari</td>
          <td style={{color: "red"}}>Not Active</td>
          <td style={{color: "yellow"}}>Pending</td>
          <td>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            <BsFillCaretDownFill style={{color: "#42cef5"}}/>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{background: "#2B2B2B"}}>
              <Dropdown.Item style={{color: "green"}}>Approve</Dropdown.Item>
              <Dropdown.Item style={{color: "red"}}>Cancel</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </td>
        </tr>

        <tr style={{background: "#2B2B2B"}}>
          <td className='text-white'>5</td>
          <td className='text-white'>Jhonny</td>
          <td className='text-white'>Bri.jpg</td>
          <td className='text-white'>27/Hari</td>
          <td style={{color: "red"}}>Not Active</td>
          <td style={{color: "yellow"}}>Pending</td>
          <td>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            <BsFillCaretDownFill style={{color: "#42cef5"}}/>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{background: "#2B2B2B"}}>
              <Dropdown.Item style={{color: "green"}}>Approve</Dropdown.Item>
              <Dropdown.Item style={{color: "red"}}>Cancel</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </td>
        </tr>
        
        <tr style={{background: "#1F1F1F"}}>
          <td className='text-white'>6</td>
          <td className='text-white'>Gina</td>
          <td className='text-white'>mandiri.jpg</td>
          <td className='text-white'>1/Hari</td>
          <td style={{color: "red"}}>Not Active</td>
          <td style={{color: "yellow"}}>Pending</td>
          <td> 
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            <BsFillCaretDownFill style={{color: "#42cef5"}}/>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{background: "#2B2B2B"}}>
              <Dropdown.Item style={{color: "green"}}>Approve</Dropdown.Item>
              <Dropdown.Item style={{color: "red"}}>Cancel</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </td>
        </tr> */}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AdminPanel;
