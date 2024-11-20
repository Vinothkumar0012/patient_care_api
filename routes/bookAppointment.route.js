const bookAppointment = (req, res) => {

    const { user_id, doctor_id, date, time, patient_name, patient_age, patient_gender, patient_contact, reason, patient_email } = req.body;

    const appointments = require('../data/appointments.json');

    const appointment = {
        appointment_id: `A${appointments.length + 1}`,
        user_id,
        doctor_id,
        date,
        time,
        patient_name,
        patient_age,
        patient_gender,
        patient_contact,
        patient_email,
        reason
    };
    appointments.push(appointment);

    require('fs').promises.writeFile(`${__dirname}/../data/appointments.json`, JSON.stringify(appointments))
        .then(() => res.status(201).json(appointment))
        .catch(error => res.status(500).json({ message: 'Failed to save appointment', error }));
}

module.exports = { bookAppointment }