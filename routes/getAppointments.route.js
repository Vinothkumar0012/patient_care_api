function getAppointment(req, res) {
    const { user_id } = req.query;
    const appointmentsData = require('../data/appointments.json');
    const doctors = require('../data/doctor.json');
    let appointments = appointmentsData.filter(a => a.user_id === user_id);
    if (appointments) {

        appointments = appointments.map((appointment) => {
            return {
                ...appointment,
                doctor_name: doctors.find((doctor) => doctor.doctor_id === appointment.doctor_id).name
            }
        })
        res.status(200).json(appointments);
    } else {
        res.status(404).json({ message: 'Appointment not found' });
    }
}

module.exports = { getAppointment }
