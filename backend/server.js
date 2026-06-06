const express = require('express');
const cors = require('cors');
const pool = require('./db.js');

const app = express();

app.use(cors());
app.use(express.json()); 

//Uses GET request to recieve all rows in services table
app.get('/services', async (req, res) => 
{

    const result = await pool.query(
            'SELECT * FROM services'
    );

    res.json(result.rows);

});

//req is infomration about the client and res is what is sent back
//Uses GET request to appointments
app.get('/appointments', async (req, res) =>
{
    //Use try catch block to return error if database is not connected correctly
    try
    {

        const result = await pool.query(
            'SELECT * FROM appointments'
        );

        res.json(result.rows);

    }
    catch(error)
    {

        console.error(error);
        res.status(500).json({
            error: "Database Error"

        });
    }
});

//Creates a new row in appointments table
app.post('/appointments', async (req, res) => 
{
    const
    {
        customer_name,
        customer_email,
        appointment_time
    } = req.body;

    await pool.query(
        `
        INSERT INTO appointments
        (
            customer_name,
            customer_email,
            appointment_time

        )
        VALUES
        (
            $1,
            $2,
            $3
        )
        `,
        [
            customer_name,
            customer_email,
            appointment_time
        ]
    );

    //Return message in json format
    res.json({
        message: "Appointment Created"
    });
});

//Delete a row from the appointments table
app.delete('/appointments/:id', async (req, res) => 
{

    //Create Id variable and inilalize it to request
    const { id } = req.params;

    await pool.query(
    `
    DELETE FROM appointments
    WHERE id = $1
    `,
    [
        id
    ]
    );

    //Return message in json format
    res.json({
        message: "Appointment Deleted"

    });

});

//Edit a row from the appointments table
app.put('/appointments/:id', async (req, res) => 
{

const { id } = req.params;

const { appointment_time } = req.body;

await pool.query(
`
UPDATE appointments
SET appointment_time = $1
WHERE id = $2
`,
[
    appointment_time,
    id
]
);
    //Return message in json format
    res.json({
        message: "Appointment Updated"
    })
});

//Makes sure server is always listening for client requests
app.listen(3000, () => 
{
    console.log('Server Running');
});