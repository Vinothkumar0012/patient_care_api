function getDoctors(req, res) {
    const doctors = require('../data/doctor.json');
    const hospitals = require('../data/hospital.json');

    const { disease } = req.query;

    if (!disease) {
        return res.status(400).json({ message: 'Disease query parameter is required' });
    }

    const matchedDoctors = doctors.filter(doctor => doctor.disease.some((d) =>
        disease.toLowerCase().split(' ').some((a) => {
            return d.toLowerCase().includes(a);
        }
        )));
    const response = matchedDoctors.map(doctor => {
        const hospital = hospitals.find(h => h.hospital_id === doctor.hospital_id);
        return {
            ...doctor,
            hospital: hospital ? {
                hospital_name: hospital.hospital_name,
                location: hospital.location,
                open_time: hospital.open_time,
                close_time: hospital.close_time
            } : null
        };
    });

    res.status(200).json(response);
}

module.exports = { getDoctors }