import React,{useState,useRef} from 'react'
import './downloadtranscipt.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination'

const DownloadTranscipt = () => {


  const [searchQuery, setSearchQuery] = useState('');
  const [items] = useState([
    { id: 1, name: 'Item 1', description: 'Description for Item 1' , date: "2023-01-20"},
    { id: 2, name: 'Item 2', description: 'Description for Item 2' , date: "2023-01-20"},
    { id: 3, name: 'Item 3', description: 'Description for Item 2' , date: "2023-01-20"},
    { id: 4, name: 'Item 4', description: 'Description for Item 2' , date: "2023-01-20"},
    { id: 5, name: 'Item 5', description: 'Description for Item 2' , date: "2023-01-20"},
    { id: 6, name: 'Item 6', description: 'Description for Item 2' , date: "2023-01-20"},
    { id: 7, name: 'Item 7', description: 'Description for Item 2' , date: "2023-01-20"},
    { id: 8, name: 'Item 8', description: 'Description for Item 2' , date: "2023-01-20"},
    // Add more items to your list
  ]);

  const itemsPerPage = 6; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const download = (id) => {
    //implement download logic in here
  };

  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file input click event
    }
  };

  const handleFileSelect = (e) => {
    // Handle the selected file here
    const selectedFile = e.target.files[0];
    console.log('Selected file:', selectedFile);
  };

  return (


    <div>
      <Navbar />
      <div className="transcipt__container">
        <h1 className="transcipt__header">Available transcipts</h1>
        <div className="transcipt__available__container">
        <div className="transcript__list__container">
          <table className="transcript__table">
            <thead>
              <tr>
                <th>Transcript Name</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedItems.map((transcript) => (
                <tr key={transcript.id}>
                  <td>{transcript.name}</td>
                  {/* Assuming 'date' is a property in each transcript object */}
                  <td>{transcript.date}</td>
                  <td>
                    {/* Assuming the 'download' function handles download action */}
                    <button className="download__button" onClick={() => download(transcript.id)}>
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="transcript__upload__container">
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileSelect}
                /* Add other file input attributes if needed */
            />
            <button onClick={handleUploadClick} className="upload__button">Upload</button>
          </div>

          <div className="transcript__pagination__container">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
          
          <div className="transcipt__pagination__container">
            <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            />
          </div>
       </div>
      </div>
      <Footer />
    </div>
  )
}

export default DownloadTranscipt;
