import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as bookActions from "../actions/books";
import * as filterActions from "../actions/filter";
import App from "../components/App";

const mapStateToProps = ({ books }) => ({
  books: books.items,
  isReady: books.isReady,
});
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(bookActions, dispatch),
  ...bindActionCreators(filterActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
