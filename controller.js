'use strict';

var response = require('./res');
var connection = require('./conn');

exports.jadwal = function(req, res) {
    connection.query('SELECT * FROM jadwal', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.findJadwal = function(req, res) {
	var id_jadwal = req.params.id_jadwal;

	connection.query('SELECT * FROM jadwal WHERE id_jadwal = ?', [id_jadwal],
		function (error, rows, fields) {
			if (error) {
				console.log(error)
			} else {
				response.ok(rows, res)
			}
		});
};

exports.createJadwal = function(req, res) {
	var id_jadwal = req.body.id_jadwal;
	var nama_bus = req.body.nama_bus;
	var asal_stasiun = req.body.asal_stasiun;
	var tujuan_stasiun = req.body.tujuan_stasiun;
	var waktu_berangkat = req.body.waktu_berangkat;
	var waktu_sampai = req.body.waktu_sampai;

	connection.query('INSERT INTO jadwal (nama_bus, asal_stasiun, tujuan_stasiun, waktu_berangkat, waktu_sampai) VALUES (?,?,?,?,?)',
		[nama_bus, asal_stasiun, tujuan_stasiun, waktu_berangkat, waktu_sampai],
		function (error, rows, fields) {
			if (error) {
				console.log(error)
			} else {
				response.ok("berhasil manambah data", res)
			}
		});
};

exports.updateJadwal = function(req, res) {
	var id_jadwal = req.body.id_jadwal;
	var nama_bus = req.body.nama_bus;
	var asal_stasiun = req.body.asal_stasiun;
	var tujuan_stasiun = req.body.tujuan_stasiun;
	var waktu_berangkat = req.body.waktu_berangkat;
	var waktu_sampai = req.body.waktu_sampai;

	connection.query('UPDATE jadwal SET nama_bus = ?, asal_stasiun = ?, tujuan_stasiun = ?, waktu_berangkat = ?, waktu_sampai = ? WHERE id_jadwal = ?', [nama_bus, asal_stasiun, tujuan_stasiun, waktu_berangkat, waktu_sampai, id_jadwal],
		function (error, rows, fields) {
		if (error) {
				console.log(error)
			} else {
				response.ok(rows, res)
			}
	});
};

exports.deleteJadwal = function(req, res) {
	var id_jadwal = req.body.id_jadwal;

	connection.query('DELETE FROM jadwal WHERE id_jadwal = ?', [id_jadwal],
		function (error, rows, fields){
			if (error) {
				console.log(error)
			} else {
				response.ok(rows, res)
			}
		});
};


exports.index = function(req, res) {
    response.ok("berhasil", res)
};