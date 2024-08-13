document.addEventListener("DOMContentLoaded", function () {
  const today = new Date().getDay();
  const fullSchedule = {
    1: `<td class="praktikum-survei">07:00 - 13:50<br>Praktikum Survei Rekayasa<br>Lab. Geomatika</td>`,
    2: `
            <td class="pkn">07:30 - 09:00<br>Pendidikan Kewarganegaraan<br>Gedung C Lantai 2 Filsafat</td>
            <td class="pancasila">11:00 - 12:30<br>Pancasila<br>C205 Filsafat</td>
            <td class="agama">15:00 - 16:30<br>Pendidikan Agama Islam<br>Gedung C Lantai 2 Filsafat</td>
        `,
    3: `
            <td class="praktikum-kadastral">07:00 - 10:50<br>Praktikum Pemetaan Kadastral<br>Lab. Geomatika</td>
            <td class="survei">13:00 - 14:50<br>Survei Rekayasa<br>Hall GP</td>
            <td class="bahasa">16:00 - 17:40<br>Bahasa Indonesia<br>Soegondo 226+227</td>
        `,
    4: `<td class="kadastral">08:00 - 08:50<br>Pemetaan Kadastral<br>Hall GP</td>`,
    5: `<td class="ide-kreatif">13:00 - 15:50<br>Ide Kreatif dan Kewirausahaan<br>Hall GP</td>`,
  };

  const currentDaySchedule = document.getElementById("current-day-schedule");
  currentDaySchedule.innerHTML = `
        <table class="schedule-table">
            <thead>
                <tr><th>${["", "Senin", "Selasa", "Rabu", "Kamis", "Jumat"][today]}</th></tr>
            </thead>
            <tbody>
                <tr>${fullSchedule[today] || "<td>No Classes Today</td>"}</tr>
            </tbody>
        </table>
    `;

  const cells = document.querySelectorAll(".schedule-table td");

  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      cell.style.transform = "scale(1.1)";
    });
    cell.addEventListener("mouseleave", () => {
      cell.style.transform = "scale(1)";
    });
  });
});

function showFullSchedule() {
  const fullScheduleTable = document.getElementById("full-schedule-table");
  fullScheduleTable.style.display = fullScheduleTable.style.display === "none" ? "table" : "none";
}
