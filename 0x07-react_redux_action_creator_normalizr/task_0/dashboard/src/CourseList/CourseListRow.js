import React from "react";
import PropTypes from "prop-types"


function CoursLisRow({ isHeader, textFirstCell, textSecondCell }) {
    const headerStyle = { backgroundColor: "#deb5b545" };
    const rowStyle = { backgroundColor: "f5f5f5ab" };
    const selectedStyle = isHeader ? headerStyle : rowStyle;

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

CourseLiistRow.defaultprops = {
    isHeader: flase,
    textSecondCell: null,
};


CourseLiistRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseLiistRow;