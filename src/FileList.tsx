import React, { useEffect, useState } from 'react';

interface File {
    name: string;
}

const FileList: React.FC = () => {
    const [files, setFiles] = useState<File[] | null>(null);

    useEffect(() => {
        const fetchFileList = async () => {
            try {
                const response = await fetch('/file_list.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setFiles(jsonData.files);
            } catch (error) {
                console.error('There was a problem fetching the file list:', error);
            }
        };

        fetchFileList();
    }, []);

    const renderTable = () => {
        const rows: JSX.Element[] = [];
        const columns = 18 ;
        let index = 0;
        const filesx = (files as File[]);

        while (index < filesx.length) {
            const rowItems: JSX.Element[] = [];
            for (let col = 0; col < columns; col++) {
                if (index < filesx.length) {
                    const file = filesx[index];
                    rowItems.push(
                        <td key={index}>
                            <a href={`/?filename=files/puzzles/${file.name}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textAlign: 'center' }}>
                                <div>
                                    <img src="http://localhost:3000/files/assets/acrostic.png" alt={"puzzle"} style={{ marginRight: '2px' }} />
                                </div>
                                <div style={{ fontWeight: 'bold' }}>
                                    {file.name.replace("Acrostic-","").replace(".json","")}
                                </div>
                            </a>
                        </td>
                    );
                    index++;
                } else {
                    rowItems.push(<td key={index + col} />);
                }
            }
            rows.push(<tr key={`row-${index}`}>{rowItems}</tr>);
        }
        return rows;
    };

    return (
        <div>
            <h1>File List:</h1>
            {files ? (
                <table>
                    <tbody>{renderTable()}</tbody>
                </table>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default FileList;