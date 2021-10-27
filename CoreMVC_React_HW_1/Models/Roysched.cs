using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace CoreMVC_React_HW_1.Models
{
    [Keyless]
    [Table("roysched")]
    [Index(nameof(TitleId), Name = "titleidind")]
    public partial class Roysched
    {
        [Required]
        [Column("title_id")]
        [StringLength(6)]
        public string TitleId { get; set; }
        [Column("lorange")]
        public int? Lorange { get; set; }
        [Column("hirange")]
        public int? Hirange { get; set; }
        [Column("royalty")]
        public int? Royalty { get; set; }

        [ForeignKey(nameof(TitleId))]
        public virtual Title Title { get; set; }
    }
}
