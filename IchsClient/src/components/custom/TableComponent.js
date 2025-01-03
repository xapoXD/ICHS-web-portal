import React from 'react';
import PropTypes from 'prop-types';
import './TableView.css'; // Ensure this CSS file exists and is correctly linked.

const TableView = ({ data }) => {

    console.log('TableComponent, Passed data:', data);

    // Ensure the data is in the correct format
    if (!data || !Array.isArray(data.StepwiseFilteredData) || data.StepwiseFilteredData.length === 0) {
        return <div>No data available</div>;
    }

    // Function to apply conditional formatting based on value comparison
    const getCellClass = (percentage, overallPercentage) => {
        if (percentage < overallPercentage) {
            return 'green';
        } else if (percentage > overallPercentage) {
            return 'red';
        }
        return ''; // No special class if percentages are equal
    };

    // Mapping region codes to names (Example mapping, update as needed)
    const regionMapping = {
        CZ10: 'Praha',
        CZ20: 'Středočeský kraj',
        CZ31: 'Jihočeský kraj',
        CZ32: 'Plzeňský kraj',
        CZ41: 'Karlovarský kraj',
        CZ51: 'Liberecký kraj',
        CZ52: 'Královéhradecký kraj',
        CZ53: 'Pardubický kraj',
        CZ63: 'Kraj Vysočina',
        CZ64: 'Jihomoravský kraj',
        CZ71: 'Olomoucký kraj',
        CZ72: 'Zlínský kraj',
        CZ80: 'Moravskoslezský kraj',
        CZ42: 'Ústecký kraj'
    };

    return (
        <div className="table-container">

            <table className="data-table">
                <thead>
                    <tr>
                        <th>Region</th>
                        {data.StepwiseFilteredData.map((filterData, index) => (
                            <React.Fragment key={index}>
                                <th colSpan="2">{filterData.AppliedFilter}</th>
                            </React.Fragment>
                        ))}
                    </tr>
                    <tr>
                        <th>Kraj</th>
                        {data.StepwiseFilteredData.map((filterData, index) => (
                            <React.Fragment key={index}>
                                <th>Krajský průměr</th>
                                <th>Celostátní průměr</th>
                            </React.Fragment>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.StepwiseFilteredData[0].RegionSummary.map((regionData, index) => (
                        <tr key={index}>
                            <td>{regionMapping[regionData.Region] || 'Unknown'}</td>
                            {data.StepwiseFilteredData.map((filterData, filterIndex) => {
                                const regionPercentage = filterData.RegionSummary[index]?.Percentage || 0;
                                const overallPercentage = filterData.OverallPercentage || 0;
                                return (
                                    <React.Fragment key={filterIndex}>
                                        <td className={getCellClass(regionPercentage, overallPercentage)}>
                                            {regionPercentage.toFixed(2)}%
                                        </td>
                                        <td>
                                            {overallPercentage.toFixed(2)}%
                                        </td>
                                    </React.Fragment>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Adding prop types to enforce type checking
TableView.propTypes = {
    data: PropTypes.shape({
        StepwiseFilteredData: PropTypes.arrayOf(PropTypes.shape({
            AppliedFilter: PropTypes.string.isRequired,
            RegionSummary: PropTypes.arrayOf(PropTypes.shape({
                Region: PropTypes.string.isRequired,
                Percentage: PropTypes.number.isRequired
            })).isRequired,
            OverallPercentage: PropTypes.number.isRequired
        })).isRequired
    }).isRequired
};

export default TableView;
