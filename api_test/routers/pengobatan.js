const { request, response } = require("express")
const express = require("express")
const app = express()

//memanggil model index
const models = require("../models/index")

//memanggil model
const pengobatan = models.pengobatan;
const keluhan = models.keluhan;
const resep_obat = models.resep_obat;

app.post("/", async (req, res) => {
    try {
        const { nama_pasien, id_pasien, tanggal_pengobatan, keluhans,
            resep_obats, biaya, menggunakan_asuransi, nama_asuransi,
            biaya_cover_asuransi
        } = req.body;

        const newPengobatan = await pengobatan.create({
            nama_pasien,
            id_pasien,
            tanggal_pengobatan,
            biaya,
            menggunakan_asuransi,
            nama_asuransi,
            biaya_cover_asuransi
        });

        const pengobatanId = newPengobatan.id_pengobatan;

        await Promise.all(keluhans.map(async (kel) => {
            await keluhans.create({
                id_pengobatan: pengobatanId,
                keluhan: kel
            });
        }));

        await Promise.all(resep_obats.map(async (resp) => {
            await resep_obats.create({
                id_pengobatan: pengobatanId,
                resep_obat: resp
            });
        }));

        res.status(201).json({ message: 'Data inserted successfully' });
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
})

app.get('/getData', async (req, res) => {
    try {
        const pengobatanData = await pengobatan.findAll({
            attributes : ['id_pengobatan','nama_pasien', 'id_pasien', 'tanggal_pengobatan', 'biaya', 'menggunakan_asuransi', 'nama_asuransi',
            'biaya_cover_asuransi'], 
            include: [
                {
                    model: keluhan,
                    as: 'keluhans',
                    attributes: ['id_keluhan', 'id_pengobatan', 'keluhan']
                },
                {
                    model: resep_obat,
                    as: 'resep_obats',
                    attributes: ['id_resep_obat', 'id_pengobatan', 'resep_obat']

                }
            ]
        });

        return res.json(pengobatanData)
    } catch (e) {
        console.log(e);
        return res.status(400).json({ message: e });
    }
});

module.exports = app;