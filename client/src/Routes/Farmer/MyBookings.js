import React , {useState , useEffect} from 'react'
import AuthService from '../../services/auth.service'
import FarmerService from '../../services/farmer.service'
import '../../styles/MyBookings.css'
import Spinner from '../../components/Spinner';
import dayjs from 'dayjs'
import ConfirmDelete from '../../components/ConfirmDelete';
import axios from 'axios';
import authHeader from '../../services/auth.headers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const MyBookings = () => {
    const user = AuthService.getCurrentUser()
    const [MyStalls, setMyStalls] = useState();

    useEffect(() => {
        FarmerService.getBookedStalls().then((res)=>{
            const {data} = res;
            setMyStalls(data.filter(e=>e.bookedBy === user.id))
        })
    }, [user])
    

    const handleDelete = (e) => {
       const DeleteId = e.target.id;
       const cancelledStall = MyStalls.filter(e => e._id === DeleteId)
       const [data] = cancelledStall;
       data.cancelledAt = dayjs(Date.now()).format("YYYY-MM-DD");
        data.bookedBy = user.id
        data.firstname = user.firstname
        data.lastname = user.lastname
        data.phone = user.phone
        console.log("data - ",data)
        axios.post("http://localhost:4000/cancelledstalls" , data , {headers:authHeader()})
        axios.delete("http://localhost:4000/bookedstalls" , { headers: authHeader()  , data:{id: DeleteId}})
        .then(res =>  {
            if(res)
            {
                const resp = res.data;
                const filData = MyStalls.filter(e => e._id !== resp._id)
                // axios.post("https://wingrowmarket.onrender.com/cancelledstalls" , data , {headers:authHeader()})
                setMyStalls(filData);
                toast.success('Cancelled successfully!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
            else{
                toast.warn('Failed to cancel booking!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
       })
    }

  return (
    <>
          <Link style={{marginTop:'10px'}} className="backbtn green" to="/farmers">
              Back
          </Link>
    {MyStalls?<div className='bookings_container'>
    <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        <div className='booking_content'>
            <div className='booking_cards'> 
                <h1 className='booking_header'>Stall Bookings</h1>
                <p className='booking_para'>List of booked stalls</p>
            </div>

            <div className='card_booking'>
                {
                    MyStalls.map((e,i)=>{
                        const bookingExpired = e.bookedAt < dayjs(Date.now()).format("YYYY-MM-DD") ? true : false;
                        return(
                            <div key={i} className='cards_section'>
                                <div className='card'>
                                    <div className='card_content'>
                                        {bookingExpired && <h2 style={{color:"red",textAlign:"center"}}>Booking Expired</h2>}
                                        <br/>
                                        <h2 className='card_header'><span>Stall No : {i+1}</span>
                                        </h2>
                                        <p className='card_para'>{e.location}</p>
                                        <p className='card_para'>{e.address}</p>
                                        <p className='card_para'>{e.stallName}</p>
                                        <p className='card_para'>{e.bookedAt}</p>
                                        <span>
                                                {bookingExpired?
                                                <div style={{cursor:"not-allowed",padding:"4px",backgroundColor:"gray",border:"none",marginTop:"10px",textAlign:"center"}}>Booking Expired</div>
                                                :
                                                <span><ConfirmDelete Delete={handleDelete} id={e._id}/></span>
                                        }
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    </div>:<Spinner/>}
    </>
  )
}

export default MyBookings