// import {ColumnFilter} from '../Display/ColumnFilter';
import { format } from 'date-fns';
export const Columns = [
    {
        // Header: "Type",
        // accessor: "type",
        // Filter:ColumnFilter,
        Header: "Action",
        accessor: "action",
    },
    {
        // Header: "SalerName",
        // accessor: "name",
        // Filter:ColumnFilter,
        Header: "Details",
        accessor: "details",
        Cell: ({ value }) => {
            try {
                const parsedDetails = JSON.parse(value); // Parse JSON string
                return (
                    <ul>
                        {Object.entries(parsedDetails).map(([key, val]) => (
                            <li key={key}><strong>{key}:</strong> {val}</li>
                        ))}
                    </ul>
                );
            } catch (e) {
                console.error("Error parsing details JSON:", e);
                return <span>Invalid Details Format</span>; // Fallback in case of error
            }
        },
        
    },
    {
        // Header: "Phone-No",
        // accessor: "phoneno",
        // Filter:ColumnFilter,
        Header: "Timestamp",
        accessor: "timestamp",
        Cell: ({ value }) => value ? format(new Date(value), "yyyy-MM-dd HH:mm:ss") : "N/A",

    },
    // {
    //     Header: "BrandName",
    //     accessor: "brandname",
    //     Filter:ColumnFilter,
    // },
    // {
    //     Header: "Yor",
    //     accessor: "yor",
    //     Filter:ColumnFilter,
    // },
    // {
    //     Header: "Travelled",
    //     accessor: "travelled",
    //     Filter:ColumnFilter,
    // },
    // {
    //     Header: "Price",
    //     accessor: "price",
    //     Filter:ColumnFilter,
    // },
    // {
    //     Header: "Vehicle-No",
    //     accessor: "vehicleno",
    //     Filter:ColumnFilter,
    // },
    // {
    //     Header: "BuyerName",
    //     accessor: "buyername",
    //     Filter:ColumnFilter,
    // },
    // {
    //     Header: "Sale's Employee ID",
    //     accessor: "saleid",
    //     Filter:ColumnFilter,
    // },
    // {
    //     Header: "EmployeeName",
    //     accessor: "employeename",
    //     Filter:ColumnFilter,
    // },
    // {
    //     Header: "DateTime",
    //     accessor: "datetime",
    //     Filter:ColumnFilter,
    // }
   /* {
        Header:"Action",    
        Cell: props =>{
            return (
                <button className="button" style={{backgroundColor:'indigo',color:'#F0FFF0'}}
                onClick={()=>{
                   console.log(props.allColumns[0].filteredRows); 
                }}
                >Delete</button>
            )
        }
    }*/
]
