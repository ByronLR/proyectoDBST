function runTable() {
  //Only needed for the filename of export files.
  //Normally set in the title tag of your page.
  document.title = "Simple DataTable";
  // DataTable initialisation
  $("#example").DataTable({
    dom: '<"dt-buttons"Bf><"clear">lirtp',
    paging: false,
    autoWidth: true,
    columnDefs: [{ orderable: true, targets: 7 }],
    buttons: ["colvis", "excelHtml5", "print"],
  });
  //Add row button
  $(".dt-add").each(function () {
    $(this).on("click", function (evt) {
      //Create some data and insert it
      var rowData = [];
      var table = $("#example").DataTable();
      //Store next row number in array
      var info = table.page.info();
      rowData.push(info.recordsTotal + 1);
      //Some description
      rowData.push("New Order");
      //Random date
      var date1 = new Date(2016, 01, 01);
      var date2 = new Date(2018, 12, 31);
      var rndDate = new Date(+date1 + Math.random() * (date2 - date1)); //.toLocaleDateString();
      rowData.push(
        rndDate.getFullYear() +
          "/" +
          (rndDate.getMonth() + 1) +
          "/" +
          rndDate.getDate()
      );
      //Status column
      rowData.push("NEW");
      //Amount column
      rowData.push(Math.floor(Math.random() * 2000) + 1);
      //Inserting the buttons ???
      rowData.push(
        '<button type="button" class="btn btn-primary btn-xs dt-edit" style="margin-right:16px;"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button><button type="button" class="btn btn-danger btn-xs dt-delete"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>'
      );
      //Looping over columns is possible
      //var colCount = table.columns()[0].length;
      //for(var i=0; i < colCount; i++){			}

      //INSERT THE ROW
      table.row.add(rowData).draw(false);
      //REMOVE EDIT AND DELETE EVENTS FROM ALL BUTTONS
      $(".dt-edit").off("click");
      $(".dt-delete").off("click");
      //CREATE NEW CLICK EVENTS
      $(".dt-edit").each(function () {
        $(this).on("click", function (evt) {
          $this = $(this);
          var dtRow = $this.parents("tr");
          $("div.modal-body").innerHTML = "";
          $("div.modal-body").append(
            "Row index: " + dtRow[0].rowIndex + "<br/>"
          );
          $("div.modal-body").append(
            "Number of columns: " + dtRow[0].cells.length + "<br/>"
          );
          for (var i = 0; i < dtRow[0].cells.length; i++) {
            $("div.modal-body").append(
              "Cell (column, row) " +
                dtRow[0].cells[i]._DT_CellIndex.column +
                ", " +
                dtRow[0].cells[i]._DT_CellIndex.row +
                " => innerHTML : " +
                dtRow[0].cells[i].innerHTML +
                "<br/>"
            );
          }
          $("#myModal").modal("show");
        });
      });
      $(".dt-delete").each(function () {
        $(this).on("click", function (evt) {
          $this = $(this);
          var dtRow = $this.parents("tr");
          if (confirm("Are you sure to delete this row?")) {
            var table = $("#example").DataTable();
            table
              .row(dtRow[0].rowIndex - 1)
              .remove()
              .draw(false);
          }
        });
      });
    });
  });
  //Edit row buttons
  $(".dt-edit").each(function () {
    $(this).on("click", function (evt) {
      $this = $(this);

      currentEdit = this.value;

      const currentBooking = bookings.find((e) => String(e.id) === currentEdit);

      cost = currentBooking.cost;

      for (const e of currentBooking.services) {
        const serviceFound = services.find(
          (s) => String(s.id) === String(e.serviceId)
        );

        if (serviceFound) cost += serviceFound.cost;
      }

      const servicesCheck = document.getElementsByName("services");

      for (const e of servicesCheck) {
        const serviceFound = currentBooking.services.find(
          (s) => String(s.serviceId) === e.value
        );

        if (serviceFound) e.checked = true;
      }

      document.getElementById("price").value = cost + ".00 MXN";

      $("#myModal").modal("show");
    });
  });

  $(".dt-delete").each(function () {
    $(this).on("click", async (evt) => {
      $this = $(this);
      var dtRow = $this.parents("tr");
      if (confirm("¿Esta seguro que desea eliminar al usuario?")) {
        var table = $("#example").DataTable();
        table
          .row(dtRow[0].rowIndex - 1)
          .remove()
          .draw(false);

        try {
          await axios({
            method: "delete",
            url: `http://localhost:1337/user/${this.value}`,
          });
        } catch (error) {}
      }
    });
  });
}
