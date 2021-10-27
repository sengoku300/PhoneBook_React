﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace CoreMVC_React_HW_1.Models
{
    [Table("employee")]
    public partial class Employee
    {
        [Key]
        [Column("emp_id")]
        [StringLength(9)]
        public string EmpId { get; set; }
        [Required]
        [Column("fname")]
        [StringLength(20)]
        public string Fname { get; set; }
        [Column("minit")]
        [StringLength(1)]
        public string Minit { get; set; }
        [Required]
        [Column("lname")]
        [StringLength(30)]
        public string Lname { get; set; }
        [Column("job_id")]
        public short JobId { get; set; }
        [Column("job_lvl")]
        public byte? JobLvl { get; set; }
        [Required]
        [Column("pub_id")]
        [StringLength(4)]
        public string PubId { get; set; }
        [Column("hire_date", TypeName = "datetime")]
        public DateTime HireDate { get; set; }

        [ForeignKey(nameof(JobId))]
        [InverseProperty("Employees")]
        public virtual Job Job { get; set; }
        [ForeignKey(nameof(PubId))]
        [InverseProperty(nameof(Publisher.Employees))]
        public virtual Publisher Pub { get; set; }
    }
}
