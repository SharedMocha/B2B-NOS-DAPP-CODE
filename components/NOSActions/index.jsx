import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import {
    injectNOS,
    nosProps
} from "@nosplatform/api-functions/lib/react";
import GoogleMapReact from "google-map-react";
import Map from "./Map.js";
import {
    u,
    wallet
} from "@cityofzion/neon-js";
import {
    unhexlify
} from "binascii";

const styles = {
    button: {
        margin: "4px 2px",
        height: "30px",
        fontSize: "14px",
        width: "50.2%",

        display: "inline-block",
        border: "none",
        backgroundColor: "#008CBA",
        fontSize: 30,
        cursor: "pointer",
        textAlign: "center",
        borderRadius: "10px"
    },
    buttongrey: {
        margin: "4px 2px",
        height: "30px",
        fontSize: "14px",
        width: "50%",
        display: "inline-block",
        border: "none",
        backgroundColor: "#e7e7e7",
        fontSize: 30,
        cursor: "pointer",
        textAlign: "center",
        borderRadius: "10px"
    },
    buttongreen: {
        margin: "4px 2px",
        height: "30px",
        fontSize: "14px",
        width: "50%",
        display: "inline-block",
        border: "none",
        backgroundColor: "#4CAF50",
        fontSize: 30,
        cursor: "pointer",
        textAlign: "center",
        borderRadius: "10px"
    },

    aligment: {
        textAlign: "center"
    },
    input: {
        width: "46.5%",
        height: "20px",
        padding: "6px",
        margin: "5px",
        color: "#808080",
        display: "block",
        fontSize: 30,
        textAlign: "left",
        border: "1px solid #808080",
        borderRadius: "5px",
        textAlignVertical: "top"
    },
    fieldname: {
        width: "50%"
    },
    img: {
        display: "block"
    }
};
const divStyle = {
    margin: "40px",
    border: "5px solid pink"
};

const Home = () => ( <
    div >
    <
    h2 > Homes < /h2> <
    /div>
);

var StepZilla = require("react-stepzilla");

// Sample Keys to store value
let requestId;
let casenumber;
let ordered_by_name;
let ordered_by_hash;
let shipping_company_depot_code;
let shipping_company_depot_hash;
let carrier_name;
let carrier_company_hash;
let product_Id;
let quantity;
let customer_name;
let delivery_by_date_time;
let customer_address;
let args;
let entered_values;
class NOSActions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requestId: "Enter Requestor Hash",
            casenumber: "Enter unique case number for tracking",
            ordered_by_name: "Enter ordering company name",
            ordered_by_hash: "Enter ordering company address hash",
            shipping_company_depot_code: "Enter depot code where the item is located",
            shipping_company_depot_hash: "Enter depot company address hash",
            carrier_name: "Enter carrier company name",
            carrier_company_hash: "Enter carrier company address hash",
            product_Id: "Enter product id that needs to be shipped",
            quantity: "Enter quantity",
            customer_name: "Enter customer name",
            delivery_by_date_time: "Enter delivery by date",
            customer_address: "Enter customer address or location",
            entered_values: ""
        };
    }
    handleAlert = async func => alert(await func);
    //handleChangeOne  = async () =>  {let requestId = this.state.name;alert(requestId);}
    //args = [requestId, casenumber, ordered_by_name, ordered_by_hash, shipping_company_depot_code, shipping_company_depot_hash, carrier_name, carrier_company_hash, product_Id, quantity, customer_name, delivery_by_date_time, customer_address];

    handleGetStorage = async (scriptHash, key, encodeInput, decodeOutput) => {
        args = [
            this.state.requestId,
            this.state.casenumber,
            this.state.ordered_by_name,
            this.state.ordered_by_hash,
            this.state.shipping_company_depot_code,
            this.state.shipping_company_depot_hash,
            this.state.carrier_name,
            this.state.carrier_company_hash,
            this.state.product_Id,
            this.state.quantity,
            this.state.customer_name,
            this.state.delivery_by_date_time,
            this.state.customer_address
        ];
        //alert(key);
        let a = parseInt(key)
        key = u.int2hex(a);
        //alert(key);

        this.props.nos
            .getStorage({
                scriptHash,
                key,
                encodeInput,
                decodeOutput
            })
            .then((data) => alert(`Get storage data: ${data} `))
            .catch(err => alert(args));
    }
    handleAlertCustom = (scriptHash, operation, args) => {
        args = [
            this.state.requestId,
            this.state.casenumber,
            this.state.ordered_by_name,
            this.state.ordered_by_hash,
            this.state.shipping_company_depot_code,
            this.state.shipping_company_depot_hash,
            this.state.carrier_name,
            this.state.carrier_company_hash,
            this.state.product_Id,
            this.state.quantity,
            this.state.customer_name,
            this.state.delivery_by_date_time,
            this.state.customer_address
        ];
        this.state.entered_values = args
        //alert(args);
        this.props.nos
            .invoke({
                scriptHash,
                operation,
                args
            })
            .then(txid => alert(`Asset details are sent to blockchain. You can track it using tracking information on the webpage. Below hash is  your reference : ${txid} `))
            .catch(err => alert(`Error: ${err.message}`));
    }
    //Handle on change events
    handleRequestorId(e) {
        this.setState({
            requestId: e.target.value
        });
    }
    handleCaseNumber(e) {
        this.setState({
            casenumber: e.target.value
        });
    }
    handleOrderByName(e) {
        this.setState({
            ordered_by_name: e.target.value
        });
    }
    handleOrderByHash(e) {
        this.setState({
            ordered_by_hash: e.target.value
        });
    }
    handleSCDepotCode(e) {
        this.setState({
            shipping_company_depot_code: e.target.value
        });
    }
    handleSCDepotHash(e) {
        this.setState({
            shipping_company_depot_hash: e.target.value
        });
    }
    handleCarrierName(e) {
        this.setState({
            carrier_name: e.target.value
        });
    }
    handleCarrierCompanyHash(e) {
        this.setState({
            carrier_company_hash: e.target.value
        });
    }
    handleProductId(e) {
        this.setState({
            product_Id: e.target.value
        });
    }
    handleQuantity(e) {
        this.setState({
            quantity: e.target.value
        });
    }
    handleCustomerName(e) {
        this.setState({
            customer_name: e.target.value
        });
    }
    handleDeliveryByDate(e) {
        this.setState({
            delivery_by_date_time: e.target.value
        });
    }
    handleCustomerAddress(e) {
        this.setState({
            customer_address: e.target.value
        });
    }
    getStore() {
        return this.sampleStore;
    }

    updateStore(update) {
        this.sampleStore = {};
    }
    render() {
        var letterStyle = {
            padding: 0,
            margin: 20,
            color: "#808080",
            display: "block",
            fontSize: 20,
            textAlign: "left"
        };

        var letterStyleHeading = {
            padding: 0,
            margin: 20,
            color: "#D2691E",
            display: "block",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "left"
        };
        var letterStyleHeadingCustomer = {
            padding: 0,
            margin: 20,
            color: "#191970",
            display: "block",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "left"
        };
        var letterStyleHeadingLink = {
            padding: 0,
            margin: 20,
            color: "#191970",
            display: "block",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "left"
        };
        var Line = require("rc-progress").Line;
        const {
            classes,
            nos
        } = this.props;
        const neo =
            "c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b";
        const gas =
            "602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7";
        const rpx = "ecc6b20d3ccac1ee9ef109af5a7cdb85706b1df9";
        // Add your smart contract's scriptHash here
        const scriptHash = "0cec642f92a7b1b59908c9f74554f6773fe51503";
        //c75643d3bace704141435631a6490a74c1bb1ab9
        //c75643d3bace704141435631a6490a74c1bb1ab9
        //3bdb4f652300187c539984cee28898489a3f2e85
        // The storagekey you want to query
        const key = "";
        // The amount and recipient of your send function
        return ( <
            React.Fragment >
            <
            div style = {
                divStyle
            }
            id = "container" >
            <
            div style = {
                letterStyle
            }
            id = "left" >
            <
            form >
            <
            fieldset >
            <
            legend style = {
                letterStyleHeading
            } >
            Tracking Information {
                " "
            } <
            /legend> <
            img src = "data:image/png;base64,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"
            align = "right"
            alt = "Trulli"
            width = "5%"
            height = "5%" /
            >
            <
            a style = {
                letterStyleHeadingLink
            }
            href = "http://neoscan-testnet.nos.io:4000/address/3bdb4f652300187c539984cee28898489a3f2e85"
            target = "_blank" >
            {
                " "
            }
            Click Here to track your submitted assets on NeoScan <
            /a> <
            /fieldset> <
            /form> <
            /div> <
            /div> <
            div style = {
                divStyle
            }
            id = "container" >
            <
            div style = {
                letterStyle
            }
            id = "left" >
            <
            form >
            <
            fieldset >
            <
            legend style = {
                letterStyleHeading
            } > Asset: Product Information < /legend> <
            img src = "http://www.companion-group.com/wp-content/uploads/brands-product-information-200x200.gif"
            align = "right"
            alt = "Trulli"
            width = "10%"
            height = "10%" /
            >

            <
            input value = {
                this.state.product_Id
            }
            onChange = {
                this.handleProductId.bind(this)
            }
            className = {
                classes.input
            }
            name = "product_Id"
            type = "text" /
            >

            <
            input value = {
                this.state.quantity
            }
            onChange = {
                this.handleQuantity.bind(this)
            }
            className = {
                classes.input
            }
            name = "quantity"
            type = "text"
            placeholder = "Enter quantity" /
            >

            <
            input value = {
                this.state.delivery_by_date_time
            }
            onChange = {
                this.handleDeliveryByDate.bind(this)
            }
            className = {
                classes.input
            }
            name = "delivery_by_date_time"
            type = "text"
            placeholder = "Enter delivery by date" /
            >

            <
            input value = {
                this.state.casenumber
            }
            onChange = {
                this.handleCaseNumber.bind(this)
            }
            className = {
                classes.input
            }
            name = "casenumber"
            type = "text"
            placeholder = "Enter unique case number for tracking" /
            >
            <
            /fieldset> <
            Line percent = "20"
            strokeWidth = "0.5"
            trailColor = "#D9D9D9"
            strokeColor = "#2db7f5" /
            >
            <
            /form> <
            div / >
            <
            /div> <
            div style = {
                letterStyle
            }
            id = "middle" >
            <
            form >
            <
            fieldset >
            <
            legend style = {
                letterStyleHeadingCustomer
            } >
            Asset: Customer Information <
            /legend> <
            img src = "http://www.experiture.com/wp-content/uploads/2014/05/Unified_Customer_View22.jpg"
            align = "right"
            alt = "Trulli"
            width = "10%"
            height = "10%" /
            >

            <
            input value = {
                this.state.customer_name
            }
            onChange = {
                this.handleCustomerName.bind(this)
            }
            className = {
                classes.input
            }
            name = "customer_name"
            type = "text"
            placeholder = "Enter customer name" /
            >

            <
            input value = {
                this.state.customer_address
            }
            onChange = {
                this.handleCustomerAddress.bind(this)
            }
            className = {
                classes.input
            }
            name = "customer_address"
            type = "text"
            placeholder = "Enter customer address or location" /
            >
            <
            /fieldset> <
            Line percent = "40"
            strokeWidth = "0.5"
            trailColor = "#D9D9D9"
            strokeColor = "#2db7f5" /
            >
            <
            /form> <
            /div> <
            div style = {
                letterStyle
            }
            id = "right" >
            <
            form >
            <
            fieldset >
            <
            legend style = {
                letterStyleHeading
            } > Asset: Seller Information < /legend> <
            img src = "https://is3-ssl.mzstatic.com/image/thumb/Purple127/v4/22/e5/7e/22e57ef5-d6cd-8fa6-701f-94b4d2a2ffff/mzl.mfffjcqr.png/246x0w.jpg
            "
            align = "right"
            alt = "Trulli"
            width = "10%"
            height = "10%" /
            >
            <
            input value = {
                this.state.requestId
            }
            onChange = {
                this.handleRequestorId.bind(this)
            }
            className = {
                classes.input
            }
            name = "requestId"
            type = "text"
            placeholder = "Enter requestor hash" /
            >
            <
            input value = {
                this.state.ordered_by_name
            }
            onChange = {
                this.handleOrderByName.bind(this)
            }
            className = {
                classes.input
            }
            name = "ordered_by_name"
            type = "text"
            placeholder = "Enter ordering company name" /
            > {
                " "
            } <
            input value = {
                this.state.ordered_by_hash
            }
            onChange = {
                this.handleOrderByHash.bind(this)
            }
            className = {
                classes.input
            }
            name = "ordered_by_hash"
            type = "text"
            placeholder = "Enter ordering company address hash" /
            >
            <
            /fieldset> <
            /form> <
            /div> <
            div style = {
                letterStyle
            }
            id = "right" >
            <
            form >
            <
            Line percent = "60"
            strokeWidth = "0.5"
            trailColor = "#D9D9D9"
            strokeColor = "#2db7f5" /
            >

            <
            fieldset >
            <
            legend style = {
                letterStyleHeadingCustomer
            } >
            Asset: Shipping Company Information <
            /legend> <
            img src = "https://upload.wikimedia.org/wikipedia/commons/3/39/FreeVector-Delivery-Logo.jpg"
            align = "right"
            alt = "Trulli"
            width = "10%"
            height = "10%" /
            >

            <
            input value = {
                this.state.carrier_name
            }
            onChange = {
                this.handleCarrierName.bind(this)
            }
            className = {
                classes.input
            }
            name = "carrier_name"
            type = "text"
            placeholder = "Enter carrier company name" /
            >
            <
            input value = {
                this.state.carrier_company_hash
            }
            onChange = {
                this.handleCarrierCompanyHash.bind(this)
            }
            className = {
                classes.input
            }
            name = "carrier_company_hash"
            type = "text"
            placeholder = "Enter carrier company address hash" /
            >
            <
            /fieldset> <
            /form> <
            Line percent = "80"
            strokeWidth = "0.5"
            trailColor = "#D9D9D9"
            strokeColor = "#2db7f5" /
            >
            <
            /div>

            <
            div style = {
                letterStyle
            }
            id = "right" >
            <
            form >
            <
            fieldset >
            <
            legend style = {
                letterStyleHeading
            } >
            Asset: Warehouse Information <
            /legend> <
            img src = "https://png.pngtree.com/element_origin_min_pic/16/11/21/d9dc8b2efb84a6b397ed5454f8b6cf81.jpg"
            align = "right"
            alt = "Trulli"
            width = "10%"
            height = "10%" /
            >
            <
            input value = {
                this.state.shipping_company_depot_code
            }
            onChange = {
                this.handleSCDepotCode.bind(this)
            }
            className = {
                classes.input
            }
            name = "shipping_company_depot_code"
            type = "text"
            placeholder = "Enter depot code where the item is located" /
            > {
                " "
            } <
            input value = {
                this.state.shipping_company_depot_hash
            }
            onChange = {
                this.handleSCDepotHash.bind(this)
            }
            className = {
                classes.input
            }
            name = "shipping_company_depot_hash"
            type = "text"
            placeholder = "Enter depot company address hash" /
            >
            <
            /fieldset> <
            Line percent = "100"
            strokeWidth = "0.5"
            trailColor = "#D9D9D9"
            strokeColor = "#2db7f5" /
            >
            <
            /form>

            <
            br / >
            <
            img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3_EzY1xCKCQD0jqN9cVkbvbX7LtwCXk_QuS_AT615gP5pW1p"
            align = "right"
            alt = "Trulli"
            width = "9%"
            height = "9%" /
            > {
                " "
            } <
            br / >
            <
            button className = {
                classes.button
            }
            ref = "Progress1"
            onClick = {
                () =>
                this.handleAlertCustom(scriptHash, "RegisterAsset", args)
            } >
            {
                " "
            }
            Create Asset {
                " "
            } <
            /button>{" "} <
            button className = {
                classes.buttongrey
            }
            onClick = {
                () =>
                this.handleAlertCustom(
                    scriptHash,
                    "TransferAssetToShipper",
                    args
                )
            } >
            {
                " "
            }
            Trasfer Asset {
                " "
            } <
            /button>{" "} <
            button className = {
                classes.buttongreen
            }
            onClick = {
                () =>
                this.handleAlertCustom(
                    scriptHash,
                    "UpdateAssetInformation",
                    args
                )
            } >
            {
                " "
            }
            Update Asset {
                " "
            } <
            /button>


            <
            /div> <
            /div>


            <
            div style = {
                divStyle
            }
            id = "container" >
            <
            div style = {
                letterStyle
            }
            id = "left" >

            <
            fieldset >
            <
            legend style = {
                letterStyleHeadingCustomer
            } >
            Retrieve Asset Details <
            /legend> <
            img src = "https://cdn1.iconfinder.com/data/icons/education-set-4/512/information-2-512.png"
            align = "right"
            alt = "Trulli"
            width = "10%"
            height = "10%" /
            >

            <
            input value = {
                this.state.casenumber
            }
            onChange = {
                this.handleCaseNumber.bind(this)
            }
            className = {
                classes.input
            }
            name = "casenumber"
            type = "text"
            placeholder = "Enter unique case number for tracking" /
            >
            <
            button className = {
                classes.buttongreen
            }
            onClick = {
                () =>
                this.handleGetStorage(
                    scriptHash,
                    this.state.casenumber,
                    true,
                    true
                )
            } >
            {
                " "
            }
            Retrieve Details <
            /button>

            <
            br / >
            <
            br / >
            <
            Map / >

            <
            /fieldset> <
            /div>{" "} <
            /div>

            <
            /React.Fragment>
        );
    }
}
NOSActions.propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
    nos: nosProps.isRequired
};
export default injectNOS(injectSheet(styles)(NOSActions));