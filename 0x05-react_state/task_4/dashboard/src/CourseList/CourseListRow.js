import React from "react";
import PropTypes from "prop-types"


function CoursListRow({ isHeader, textFirstCell, textSecondCell }) {
    const headerStyle = { backgroundColor: "#deb5b545" };
    const rowStyle = { backgroundColor: "f5f5f5ab" };
    const [checked, setChecked] = useState(false);
    const selectedStyle = isHeader ? headerStyle : rowStyle;

    // Handle check change
    const handleCheckChange = () => {
      setChecked(!checked);
    };

    return (
        <tr style={selectedStyle}>
            {isHeader ? (
                textSecondCell === null ? (
                    <th colSpan="2">{textFirstCell}</th>
                ) : (
                    <>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                    </>
                )
            )
         ) :  (
                <>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </>
            )}
        </tr>
    );
}

/* Modified */

const rowStyles = StyleSheet.create({
  thcenter: {
    borderBottom: "1px solid grey",
    margin: 0,
    padding: 0,
    textAlign: "center",
  },

  th: {
    borderBottom: "1px solid grey",
      margin: 0,
      padding: 0,
      textAlign: "left",
  },
  th: {
    paddingleft: 3,
  },
  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
});

CourseListRow.defaultprops = {
    isHeader: false,
    textSecondCell: null,
};


CourseLiistRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
