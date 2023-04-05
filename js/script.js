function mostrarHorario() {
    const estacion = document.getElementById("estacion").value;
    const dia = document.getElementById("dia").value;
    const direccion = document.getElementById("direccion").value;
    let horario;
    //GENERAL LEMOS HORARIOS
    if (estacion === "General Lemos") {
    if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
        if (direccion === "General Lemos") {
        horario = "01:48, 03:28, 04:23, 05:07, 05:22, 05:47, 06:01, 06:11, 06:21 06;31, 06:39, 06:46, 06:54, 07:02, 07:10, 07,18, 07:26, 07:34, 07:42, 07:50, 07:58, 08:06, 08:14, 08:22, 08:34, 08:44, 08:22, 08:34, 08:44, 08:54, 09:04, 09:14, 09:24, 09:39, 09:54, 10:09, 10:26, 10:46, 11:02, 11:17, 11:32, 11:47, 12:02, 12:17, 12:32, 12:47, 13:02, 13:17, 13:32, 13:17, 13:32, 13:47, 14:02, 14:17, 14:32, 14:47, 15:02, 15:17, 15:32, 15:47, 16:02, 16:17, 16:32, 16:48, 17:03, 17:18, 17:33, 17:48, 17:58, 18:08, 18:18, 18:28, 18:38, 18:48, 18:58, 19:08, 19:18, 19:28, 19:38, 19:48, 19:58, 20:08, 20:18, 20:28, 20:38, 20:48, 21:03, 21:18, 21:33, 21:48, 22:08, 22:28, 22:48, 23:08, 23:28, 23:54, 00:38";
        } else { 
        horario = "01:00, 02:30, 03:45, 04:30, 04:45, 05:00, 05:15, 05:30, 05:40, 05:40, 05:51, 06:01, 06:11, 06:21, 06:31, 06:39, 06:54, 07:02, 07:10, 07:18, 07:26, 07:34, 07:42, 07:50, 07:58, 08:06, 08:14, 08:22, 08:39, 08:49, 08:59, 09:09, 09:19, 09:29, 09:44, 09:59, 10:14, 10:31, 10:51, 11:07, 11:22, 11:37, 11:52, 12:07, 12:22, 12:37, 12:52, 13:07, 13:22, 13:37, 13:52, 14;07, 14;22, 14:37, 14:52, 15:07, 15:22, 15:37, 15:52, 16:07, 16:22, 16:37, 16:53, 17:08, 17:23, 17:38, 17:53, 18:03, 18:13, 18:23, 18:33, 18:43, 18:53, 19:03, 19:13, 19:23, 19:33, 19:43, 19:53, 20:03, 20:13, 20:23, 20:43, 21:03, 21:23, 21:41, 22:01, 22:13, 22:33, 22:53, 23:21, 23:59";
        }
    } else if (dia === "sabado") {
        if (direccion === "General Lemos") {
        horario = "01:46, 03:26, 04:21, 05:26, 05:47, 06:07, 06:27, 06:47, 07:02, 07:17, 07:32, 07:47, 08:02, 08:17, 08:32, 08:47, 09:02, 09:17, 09:32, 09:47, 10:17, 10:32, 10:47, 11:02, 11:17, 11:32, 11:47, 12:02, 12:17, 12:32, 12:47, 13:07, 13:27, 13:47, 14:07, 14:27, 14:47, 15:07, 15:27, 15:47, 16:07, 16:27, 16:47, 17:07, 17:27, 17:47, 18:07, 18:27, 18:47, 19:07, 19:27, 19:47, 20:07, 20:27, 20:47, 21:10, 21:40, 22:10, 22:40, 23:10, 23:40, 23:58, 00:37";
        } else {
        horario = "01:00, 02:30, 03:45, 04:30, 05:00, 05:30, 05:52, 06:12, 06:32, 06:52, 07:07, 07:22, 07:37, 07:52, 08:07, 08:22, 08:37, 08:52, 09:07, 09:22, 09:37, 09:52, 10:07, 10:22, 10:37, 10:52, 11:07, 11:22, 11:37, 11:52, 12:07, 12:22, 12:37, 12:52, 13:12, 13:32, 13,52, 14:32, 14:52, 15:12, 15:32, 15:52, 16:12, 16:32, 16:52, 17;32, 17:52, 18:12, 18.32, 18:52, 19:12, 19:32, 19:52, 20:12, 20:32, 20:52, 21:28, 21:48, 23:18, 23:48";
        }
    } else if (dia === "domingo/feriado") {
        if (direccion === "General Lemos") {
        horario = "01:47, 05:12, 06:02, 06:47, 07:17, 07:47, 08:17, 08:47, 09:17, 10:17, 11:17, 11:47, 12:17, 12:47, 13:17, 13:47, 14:17, 14:47, 15:17, 15:47, 16:17, 16:47, 17:17, 17:47, 18:17, 18:47, 19:17, 19:47, 20:17, 20:47, 21:17, 21:47, 22:17, 22:47, 23:27, 00:37";
        } else {
        horario = "00:01, 03:12, 04:15, 05:30, 06:20, 06:55, 07:25, 07:55, 08:25, 08:55, 09:25, 09:55, 10:25, 10:55, 11:25, 11:55, 12:25, 12:55, 13:25, 14:25, 14:55, 15:25, 15:55, 16:25, 16:55, 17:25, 17:55, 18:25, 18:55, 19:25, 19:55, 20:25, 20:55, 21:25, 21:55, 22:25, 22:55, 23:35";
        }
    }
    }
    //SARGENTO CABRAL HORARIOS
    if (estacion === "Sargento Cabral") {
        if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
            if (direccion === "General Lemos") {
            horario = "01:45, 03:25, 04:20, 05:04, 05:19, 05:44, 05:58, 06:08, 06:18, 06;28, 06:36, 06:43, 06:59, 07:07, 07:15, 07:23, 07:31, 07:39, 07:47, 07:55, 08:03, 08:11, 08:19, 08:31, 08:41, 08:51, 09:11, 09:21, 09:36, 09:05, 09:51, 10:06, 10:23, 10:43, 10:59, 11:14, 11:29, 11:44, 11:59, 12:14, 12:29, 12:44, 12:59, 13:14, 13:29, 13:44, 13:59, 14:14, 14:29, 14:44, 14:59, 15:14, 15:29, 15:44, 15:59, 16:14, 16:29, 16:45, 17:00, 17:15, 17:30, 17:45, 17:55, 18:05, 18:15, 18:25, 18:35, 18:45, 18:55, 19:05, 19:15, 19:25, 19:35, 19:48, 19:55, 20:05, 20:15, 20:25, 20:35, 20:45, 21:00, 21:15, 21:30, 21:45, 22:05, 22:25, 22:45, 23:05, 23:25, 23:51, 00:35";
            } else { 
            horario = "01:02, 02:32, 03:47, 04:32, 04:47, 05:02, 05:17, 05:32, 05:42, 05:53, 06:03, 06:13, 06:23, 06:33, 06:41, 06:48, 06:56, 07:04, 07:12, 07:20, 07:28, 07:36, 07:44, 07:52, 08:00, 08:08, 08:16, 08:24, 08:31, 08:41, 08:515, 09:01, 09:11, 09:21, 09:31, 09:46, 10:01, 10:16, 10:33, 10:53, 11:09, 11:24, 11:39, 11:54, 12:09, 12:24, 12:39, 12:54, 13:09, 13:24, 13:39, 13:54, 14:09, 14:24, 14:39, 14:54, 15:09, 15:24, 15:39, 15:54, 16:09, 16:24, 16:39, 16:55, 17:10, 17:25, 17:40, 17:55, 18:05, 18:15, 18:25, 18:35, 18:45, 18:55, 19:05, 19:15, 19:25, 19:35, 19:45, 19:55, 20:05, 20:15, 20:25, 20:45, 21:05, 21:25, 21:43, 22:03, 22:15, 22:35, 22:55, 23:23, 00:01";
            }
        } else if (dia === "sabado") {
            if (direccion === "General Lemos") {
            horario = "01:43, 03:23, 04:18, 05:23, 05:44, 06:04, 06:24, 06:44, 06:59, 07:14, 07:29, 07:44, 07:59, 08:14, 08:29, 08:44, 08:59, 09:14, 09:29, 09:44, 09:59, 10:14, 10:29, 10:44, 10:59, 11:14, 11:29, 11:44, 11:59, 12:14, 12:29, 12:44, 13:04, 13:24, 13:44, 14:04, 14:24, 14:44, 15:04, 15:24, 15:44, 16:04, 16:24, 16:44, 17:04, 17:24, 17:44, 18:04, 18:24, 18:44, 19:04, 19:24, 19:44, 20:04, 20:24, 20:44, 21:07, 21:37, 22:07, 22:37, 23:07, 23:37, 23:55, 00:34";
            } else {
            horario = "01:02, 02:32, 03:47, 04:32, 05:02, 05:32, 05:54, 06:14, 06:34, 06:54, 07:09, 07:24, 07:39, 07:54, 08:09, 08:24, 08:39, 08:54, 09:09, 09:24, 09:39, 09:54, 10:09, 10:24, 10:39, 10:54, 11:09, 11:24, 11:39, 11:54, 12:09, 12:24, 12:39, 12:54, 13:14, 13:34, 13:54, 14:14, 14:34, 14:54, 15:14, 15:34, 15:54, 16:14, 16:34, 16:54, 17:14, 17:34, 17:54, 18:14, 18:34, 18:54, 19:14, 19:34, 19:54, 20:14, 20:34, 20:54, 21:30, 21:50, 22:20, 22:50, 23:20, 23:50";
            }
        } else if (dia === "domingo/feriado") {
            if (direccion === "General Lemos") {
            horario = "01:44, 05:09, 05:59, 06:44, 07:14, 07:44, 08:14, 08:44, 09:14, 09:44, 10:14, 10:44, 11:14, 11:44, 12:14, 12:44, 13:14, 13:44, 14:14, 14:44, 15:14, 15:44, 16:14, 16:44, 17:1417:44, 18:14, 18:44, 19:14, 19:44, 20:14, 20:44, 21:14, 22:14, 22:44, 23:24, 00:34";
            } else {
            horario = "00:03, 03:14, 04:17, 05:32, 06:22, 06:57, 07:27, 07:57, 08:27, 08:57, 09:27, 09:57, 10:27, 10:57, 11:27, 11:57, 12:27, 12:57, 13:27, 13:57, 14:27, 14:57, 15:27, 15:57, 16:27, 16:57, 17:27, 17:57, 18:27, 18:57, 19:27, 19:57, 20:27, 20:57, 21:27, 21:57, 22:27, 22:57, 23:37";
            }
        }
        }
    // CAMPO DE MAYO HORARIOS
    if (estacion === "Campo de Mayo") {
        if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
            if (direccion === "General Lemos") {
            horario = "01:43, 03:23, 04:18, 05:02, 05:17, 05:42, 05:56, 06:06, 06:16, 06:26, 06:34, 06:41, 06:49, 06:57, 07:05, 07:13, 07:21, 07:29, 07:37, 07:45, 07:53, 08:01, 08:09, 08:17, 08:29, 08:39, 08:49, 08:59, 09:09, 09:19, 09:34, 09:49d, 10:04, 10:21, 10:57, 11:12, 11:27, 11:42, 11:57, 12:12, 12:27, 12:42, 12:57, 13:12, 13:27, 13:42, 13:57, 14:12, 14:27, 14:42,14:57, 15:12, 15:27, 15:42, 15:57, 16:12, 16:27, 16:43, 16:58, 17:13, 17:28, 17:43, 17:53, 18:03, 18:13, 18:23, 18:33, 18:43, 18:53, 19:03, 19:13, 19:23, 19:33, 19:43, 19:53, 20:03, 20:13, 20:23, 20:33, 20:43, 20:58, 21:13, 21:28, 21:43, 22:03, 22:23, 22:43, 23:03, 23:23, 23:49, 00:33";
            } else { 
            horario = "01:04, 02:34, 03:49, 04:34, 04:49, 05:04, 05:19, 05:34, 05:44, 05:55, 06:05, 06:15, 06:25, 06:35, 06:43, 06:50, 06:58, 07:06, 07:14, 07:22, 07:30, 07:38, 07:46, 07:54, 08:02, 08:10, 08:18, 08:26, 08:33, 08:43, 08:53, 09:03, 09:13, 09:23, 09:33, 09:48, 10:03, 10:18, 10:35, 10:55, 11:11, 11:26, 11:41, 11:56, 12:11, 12:26, 12:41, 12:56, 13:11, 13:26,13:41, 13:56, 14:11, 14:26, 14:41, 14:56, 15:11, 15:26, 15:41, 15:56, 16:11, 16:26, 16:41, 16:57, 17:12, 17:27, 17:42, 17:57, 18:07, 18:17, 18:27, 18:37, 18:47, 18:57, 19:07, 19:17, 19:27, 19:37, 19:47, 19:57, 20:07, 20:17, 20:27, 20:47, 21:07, 21:27, 21:45, 22:05, 22:17, 22:37, 22:57, 23:25, 00:03";
            }
        } else if (dia === "sabado") {
            if (direccion === "General Lemos") {
            horario = "01:41, 03:21, 04:16, 05:21, 05:42, 06:02, 06:22, 06:42, 06:57, 07:12, 07:27, 07:42, 07:57, 08:12, 08:27, 08:42, 08:57, 09:12, 09:27, 09:42, 09:57, 10:12, 10:27, 10:42, 10:57, 11:12, 11:27, 11:42, 11:57, 12:12, 12:27, 12:42, 13:02, 13:22, 13:42, 14:02, 14:22, 14:42, 15:02, 15:22, 15:44, 16:02, 16:22, 16:42, 17:02, 17:22, 17:42, 18:02, 18:22, 18:42, 19:02, 19:22, 19:42, 20:02, 20:22, 20:42, 21:05, 21:35, 22:05, 22:35, 23:05, 23:35, 23:53, 00:32";
            } else {
            horario = "01:04, 02:34, 03:49, 04:34, 05:04, 05:34, 05:56, 06:16, 06:36, 06:56, 07:11, 07:26, 07:41, 07:56, 08:11, 08:26, 08:41, 08:56, 09:11, 09:26, 09:41, 09:56, 10:11, 10:26, 10:41, 10:56, 11:11, 11:26, 11:41, 11:56, 12:11, 12:26, 12:41, 12:56, 13:16, 13:36, 13:56, 14:16, 14:36, 14:56, 15:16, 15:36, 15:56, 16:16, 16:36, 16:56, 17:16, 17:36, 17:56, 18:16, 18:36, 18:56, 19:16, 19:36, 19:56, 20:16, 20:36, 20:56, 21:32, 21:52, 22:22, 22:52, 23:22, 23:52";
            }
        } else if (dia === "domingo/feriado") {
            if (direccion === "General Lemos") {
            horario = "01:42, 05,07, 05:57, 06:42, 07:12, 07:42, 08:12, 08:42, 09:12, 09:42, 10:12, 10:42, 11:12, 11:42, 12:12, 12:42, 13:12, 13:42, 14:12, 14:42, 15:12, 15:42, 16:12, 16:42, 17:12, 17:42, 18:12, 18:42, 19:12, 19:42, 20:12, 20:42, 21:12, 21:42, 22:12, 22:42, 23:22, 00:32";
            } else {
            horario = "00:05, 03:16, 04:19, 05:34, 06:24, 06:59, 07:29, 07:59, 08:29, 08:59, 09:29, 09:59, 10:29, 10:59, 11:29, 11:59, 12:29, 12:59, 13:29, 13:59, 14:29, 14:59, 15:29, 15:59, 16:29, 16:59, 17:29, 17:59, 18:29, 18:59, 19:29, 19:59, 20:29, 20:59, 21:29, 21:59, 22:29, 22:59, 23:39";
            }
        }
    }
    // TENIENTE AGNETA HORARIOS
    if (estacion === "Teniente Agneta") {
        if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
            if (direccion === "General Lemos") {
            horario = "01:41, 03:21, 04:16, 05:00, 05:15, 05:40, 05:54, 06:04, 06:14, 06:24, 06:32, 06:39, 06:47, 06:55, 07:03, 07:11, 07:19, 07:27, 07:35, 07:43, 07:51, 07:59, 08:07, 08:15, 08:27,08:37, 08:47, 08:57, 09:07, 09:17, 09:32, 09:47, 10:02, 10:19, 10:39, 10:55, 11:10, 11:25, 11:40, 11:55, 12:10, 12:25, 12:40, 12:55, 13:10, 13:25, 13:40, 13:55, 14:10, 14:25, 14:40, 14:55, 15:10, 15:25, 15:40, 15:55, 16:10, 16:25, 16:41, 16:56, 17:11, 17:26, 17:41, 17:51, 18:01, 18:11, 18:21, 18:31, 18:41, 18:51, 19:01, 19:11, 19:21, 19:41, 19:51, 20:01, 20:11, 20:21, 20:31, 20:41, 20:56, 21:11, 21:26, 21:41, 22:01, 22:21, 22:41, 23:01, 23:21, 23:47, 00:31";
            } else { 
            horario = "01:05 02:35 03:50 04:35 04:50 05:05 05:20 05:35 05:45 05:56, 06:06, 06:16, 06:26, 06:36, 06:44, 06:51, 06:59, 07:07, 07:15, 07:23, 07:31, 07:39, 07:47, 07:55, 08:03, 08:11, 08:19, 08:27, 08:34, 08:44, 08:54, 09:04, 09:14, 09:24, 09:34, 09:49, 10:04, 10:19, 10:36, 10:56, 11:12, 11:27, 11:42, 11:57, 12:12, 12:27, 12:42, 12:57, 13:12, 13:27, 13:42, 13:57, 14:12, 14:27, 14:42, 14:57, 15:12, 15:27, 15:42, 15:57, 16:12, 16:27, 16:42, 16:58, 17:13, 17:28, 17:43, 17:58, 18:08, 18:18, 18:28, 18:38, 18:48, 18:58, 19:41, 18:51, 19:01, 19:11, 19:21, 20:01, 20:11, 20:21, 20:31, 20:41, 20:56, 21:11, 21:26, 21:41, 22:01, 22:21, 22:41, 23:01, 23:21, 23:47, 00:31";
            }
        } else if (dia === "sabado") {
            if (direccion === "General Lemos") {
            horario = "01:39, 03:19, 04:14, 05:19, 05:40, 06:00, 06:20, 06:40, 06:55, 07:10, 07:25, 07:40, 07:55, 08:10, 08:25, 08:40, 08:55, 09:10, 09:25, 09:40, 09:55, 10:10, 10:25, 10:40, 10:55, 11:10, 11:25, 11:40, 11:55, 12:10, 12:25, 12:40, 13:00, 13:20, 13:40, 14:00, 14:20, 14:40, 15:00, 15:20, 15:40, 16:00 16:20, 16:40,  17:00, 17:20, 17:40, 18:00, 18:20, 18:40, 19:00, 19:20, 19:40, 20:00, 20:20, 20:40, 21:03, 21:33, 22:03, 22:33, 23:51, 00:30";
            } else {
            horario = "01:05, 02:35,03:50, 04:35, 05:05, 05:35, 05:57, 06:17, 06:37, 06:57, 07:12, 07:27, 07:42, 07:57, 08:12, 08:27, 08:42, 08:57, 09:12, 09:27, 09:42, 09:57, 10:12, 10:27, 10:42, 10:57, 11:12, 11:27, 11:42, 11:57, 12:12, 12:27, 12:42, 12:57, 13:17, 13:37, 13:57, 14:17, 14:37, 14:57, 15:17, 15:37, 15:57, 16:17, 16:37, 16:57, 17:17, 17:37, 17:57, 18:17, 18:37, 18:57, 19:17, 19:37, 19:57,20:17,20:37, 20:57, 21:33, 21:53, 22:23, 22:53, 23:23, 23:53";
            }
        } else if (dia === "domingo/feriado") {
            if (direccion === "General Lemos") {
            horario = "01:40, 05:05, 05:55, 06:40, 07:10, 07:40, 08:10, 08:40, 09:10, 09:40, 10:10, 10:40, 11:10, 11:40, 12:10, 12:40, 13:10, 13:40, 14:10, 14:40, 15:10, 15:40, 16:10, 16:40, 17:10, 17:40, 18:10, 18:40, 19:10, 19:40, 20:10, 20:40, 21:10, 21:40, 22:10, 22:40, 23:20, 00:30";
            } else {
            horario = "00:06, 03:17, 04:20, 05:35, 06:25, 07:00, 07:30, 08:00, 08:30, 09:00, 09:30, 10:00, 10:30, 11:00, 11:30, 12:00, 12:30, 13:00, 13:30, 14:00, 14:30, 15:00, 15:30, 16:00, 16:30,  17:00, 17:30, 18:00, 18:30, 19:00, 19:30, 20:00, 20:30, 21:00, 21:30, 22:00, 22:30, 23:00, 23:40";
            }
        }
    }
    // CAPITAN LOZANO HORARIOS
    if (estacion === "Capitan Lozano") {
        if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
            if (direccion === "General Lemos") {
            horario = "01:39, 03:19, 04:14, 04:58, 05:13, 05:38, 05:52, 06:02, 06:12, 06:22, 06:30, 06:37, 06:45, 06:53, 07:01, 07:09, 07:17, 07:25, 07:33, 07:41, 07:49, 07:57, 08:05, 08:13, 08:25, 08:35, 08:45, 08:55, 09:05, 09:15, 09:30, 09:45, 10:00, 10:17, 10:37, 10:53, 11:08, 11:23";
            } else { 
            horario = "";
            }
            } else if (dia === "sabado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
            } else if (dia === "domingo/feriado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
        }
    }
    // SARGENTO BARRUFALDI HORARIOS
    if (estacion === "Sargento Barrufaldi") {
        if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
            if (direccion === "General Lemos") {
            horario = "01:37, 03:17, 04:12, 04:56, 05:11, 05:36, 05:50, 06:00, 06:10, 06:20, 06:20, 06:28, 06:35, 06:43, 06:51, 06:59, 07:07, 07:15, 07:23, 07:31, 07:39, 07:47, 07:55, 08:03, 08:11, 08:23, 08:33, 08:43, 08:53, 09:03, 09:13, 09:28,09:43, 09:58, 10:15, 10:35, 10:51, 11:06, 11:21, ";
            } else { 
            horario = "";
            }
            } else if (dia === "sabado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
            } else if (dia === "domingo/feriado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
        }
    }
    // JUAN B. DE LASALLE
    if (estacion === "Juan B. De Lasalle") {
        if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
            if (direccion === "General Lemos") {
            horario = "01:34 03:14 04:09 04:53 05:08 05:33 05:47 05:57 06:07 06:17 06:25 06:33 06:41 06:49 06:57 07:05 07:13 07:21 07:29 07:37 07:45 07:53 08:01 08:09 08:21 08:31 08:41 08:51 09:01 09:11 09:26 09:41 09:56 10:13 10:33 10:49 11:04 11:19";
            } else { 
            horario = "";
            }
            } else if (dia === "sabado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
            } else if (dia === "domingo/feriado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
        }
    }
    // EJERCITO DE LOS ANDES HORARIOS
    if (estacion === "Ejercito de los Andes") {
        if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
            if (direccion === "General Lemos") {
            horario = "01:33 03:13 04:08 04:52 05:07 05:32 05:46 05:56 06:06 06:16 06:24 06:32 06:40 06:48 06:56 07:04 07:12 07:20 07:28 07:36 07:44 07:52 08:00 08:08 08:20 08:30 08:40 08:50 09:00 09:10 09:25 09:40 09:55 10:12 10:32 10:48 11:03 11:18";
            } else { 
            horario = "";
            }
            } else if (dia === "sabado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
            } else if (dia === "domingo/feriado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
        }
    }
    //RUBEN DARIO HORARIOS
    if (estacion === "Ruben Dario") {
        if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
            if (direccion === "General Lemos") {
            horario = "01:29 03:09 04:04 04:48 05:03 05:28 05:42 05:52 06:02 06:12 06:20 06:28 06:36 06:44 06:52 07:00 07:08 07:16 07:24 07:32 07:40 07:48 07:56 08:04 08:16 08:26 08:36 08:46 08:56 09:06 09:21 09:36 09:51 10:08 10:28 10:44 10:59 11:14";
            } else { 
            horario = "";
            }
            } else if (dia === "sabado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
            } else if (dia === "domingo/feriado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
        }
    }
    //JORGE NEWBERY HORARIOS
    if (estacion === "Jorge Newbery") {
        if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
            if (direccion === "General Lemos") {
            horario = "01:28 03:08 04:03 04:47 05:02 05:27 05:41 05:51 06:01 06:11 06:19 06:27 06:35 06:43 06:51 06:59 07:07 07:15 07:23 07:31 07:39 07:47 07:55 08:03 08:15 08:25 08:35 08:45 08:55 09:05 09:20 09:35 09:50 10:07 10:27 10:43 10:58 11:13";
            } else { 
            horario = "";
            }
            } else if (dia === "sabado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
            } else if (dia === "domingo/feriado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
        }
    }
    //PABLO PODESTA HORARIOS
    if (estacion === "Pablo Podesta") {
        if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
            if (direccion === "General Lemos") {
            horario = "01:26 03:06 04:01 04:45 05:00 05:25 05:39 05:49 05:59 06:09 06:17 06:25 06:33 06:41 06:49 06:57 07:05 07:13 07:21 07:29 07:37 07:45 07:53 08:01 08:13 08:23 08:33 08:43 08:53 09:03 09:18 09:33 09:48 10:05 10:25 10:41 10:56 11:11";
            } else { 
            horario = "";
            }
            } else if (dia === "sabado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
            } else if (dia === "domingo/feriado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
        }
    }
    // MARTIN CORONADO HORARIOS
    if (estacion === "Martin Coronado") {
        if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
            if (direccion === "General Lemos") {
            horario = "01:24 03:04 03:59 04:43 04:58 05:23 05:37 05:47 05:57 06:07 06:15 06:23 06:31 06:39 06:47 06:55 07:03 07:11 07:19 07:27 07:35 07:43 07:51 07:59 08:11 08:21 08:31 08:41 08:51 09:01 09:16 09:31 09:46 10:03 10:23 10:39 1054 11:09";
            } else { 
            horario = "";
            }
            } else if (dia === "sabado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
            } else if (dia === "domingo/feriado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
        }
    }
    //JOSE M. BOSCH HORARIOS
    if (estacion === "Jose M. Bosch") {
        if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
            if (direccion === "General Lemos") {
            horario = "01:21 03:01 03:56 04:41 04:56 05:21 05:35 05:45 05:55 06:05 06:13 06:20 06:28 06:36 06:44 06:52 07:00 07:08 07:16 07:24 07:32 07:40 07:48 07:56 08:08 08:18 08:18 08:38 08:48 08:58 09:13 09:28 09:43 10:00 10:20 10:36 10:51 11:06";
            } else { 
            horario = "";
            }
            } else if (dia === "sabado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
            } else if (dia === "domingo/feriado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
        }
    }
    //TROPEZON HORARIOS
    if (estacion === "Teniente Agneta") {
        if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
            if (direccion === "General Lemos") {
            horario = "";
            } else { 
            horario = "";
            }
            } else if (dia === "sabado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
            } else if (dia === "domingo/feriado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
        }
    }
    //LOURDES HORARIOS
    if (estacion === "Teniente Agneta") {
        if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
            if (direccion === "General Lemos") {
            horario = "";
            } else { 
            horario = "";
            }
            } else if (dia === "sabado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
            } else if (dia === "domingo/feriado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
        }
    }
    //FERNANDEZ MORENO HORARIOS
    if (estacion === "Teniente Agneta") {
        if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
            if (direccion === "General Lemos") {
            horario = "";
            } else { 
            horario = "";
            }
            } else if (dia === "sabado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
            } else if (dia === "domingo/feriado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
        }
    }
    //CORONEL FCO. LYNCH HORARIOS
    if (estacion === "Teniente Agneta") {
        if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
            if (direccion === "General Lemos") {
            horario = "";
            } else { 
            horario = "";
            }
            } else if (dia === "sabado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
            } else if (dia === "domingo/feriado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
        }
    }
    //ANTONIO DEVOTO HORARIOS
    if (estacion === "Teniente Agneta") {
        if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
            if (direccion === "General Lemos") {
            horario = "";
            } else { 
            horario = "";
            }
            } else if (dia === "sabado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
            } else if (dia === "domingo/feriado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
        }
    }
    //EL LIBERTADOR HORARIOS
    if (estacion === "Teniente Agneta") {
        if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
            if (direccion === "General Lemos") {
            horario = "";
            } else { 
            horario = "";
            }
            } else if (dia === "sabado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
            } else if (dia === "domingo/feriado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
        }
    }
    //DR. FCO. BEIRO HORARIOS
    if (estacion === "Teniente Agneta") {
        if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
            if (direccion === "General Lemos") {
            horario = "";
            } else { 
            horario = "";
            }
            } else if (dia === "sabado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
            } else if (dia === "domingo/feriado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
        }
    }
    //P. N. ARATA HORARIOS
    if (estacion === "Teniente Agneta") {
        if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
            if (direccion === "General Lemos") {
            horario = "";
            } else { 
            horario = "";
            }
            } else if (dia === "sabado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
            } else if (dia === "domingo/feriado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
        }
    }
    //JOSE ARTIGAS HORARIOS
    if (estacion === "Teniente Agneta") {
        if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
            if (direccion === "General Lemos") {
            horario = "";
            } else { 
            horario = "";
            }
            } else if (dia === "sabado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
            } else if (dia === "domingo/feriado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
        }
    }
    //FEDERICO lACROZE
    if (estacion === "Teniente Agneta") {
        if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
            if (direccion === "General Lemos") {
            horario = "";
            } else { 
            horario = "";
            }
            } else if (dia === "sabado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
            } else if (dia === "domingo/feriado") {
            if (direccion === "General Lemos") {
            horario = "";
            } else {
            horario = "";
            }
        }
    }




















    document.getElementById("horario").textContent = horario;
}






