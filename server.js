const dayjs = require("dayjs");

const daftar_hari = {
  Sunday: "Minggu",
  Monday: "Senin",
  Tuesday: "Selasa",
  Wednesday: "Rabu",
  Thursday: "Kamis",
  Friday: "Jumat",
  Saturday: "Sabtu",
};

const daftar_bulan = {
  January: "Januari",
  February: "Februari",
  March: "Maret",
  April: "April",
  May: "Mei",
  Juny: "Juni",
  July: "Juli",
  August: "Agustus",
  September: "September",
  October: "Oktober",
  November: "November",
  December: "Desember",
};

const currentDate = dayjs();
const hari = daftar_hari[currentDate.format("dddd")];
const bulan = daftar_bulan[currentDate.format("MMMM")];
const tahun = currentDate.format("YYYY");
const tanggal = `${hari}, ${currentDate.format("D")} ${bulan} ${tahun}`;

console.log(tanggal);
