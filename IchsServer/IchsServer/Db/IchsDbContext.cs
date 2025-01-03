using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace IchsServer.Db
{
    public partial class IchsDbContext : DbContext
    {
        public IchsDbContext()
        {
        }

        public IchsDbContext(DbContextOptions<IchsDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<IchsDataset> IchsDatasets { get; set; } = null!;
        public virtual DbSet<IchsPsc> IchsPscs { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-1PHD934\\SQLEXPRESS;Initial Catalog=ichs_records;Integrated Security=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<IchsDataset>(entity =>
            {
                entity.HasKey(e => e.SubjectId);

                entity.ToTable("ICHS_dataset");

                entity.Property(e => e.SubjectId)
                    .ValueGeneratedNever()
                    .HasColumnName("SubjectID");

                entity.Property(e => e.Alkohol).HasColumnName("ALKOHOL");

                entity.Property(e => e.Dia).HasColumnName("DIA");

                entity.Property(e => e.FyzLimit).HasColumnName("FYZ_LIMIT");

                entity.Property(e => e.Glykemie)
                    .HasColumnType("decimal(18, 10)")
                    .HasColumnName("GLYKEMIE");

                entity.Property(e => e.Kouri).HasColumnName("KOURI");

                entity.Property(e => e.Ldl)
                    .HasColumnType("decimal(18, 10)")
                    .HasColumnName("LDL");

                entity.Property(e => e.OvoceZelenina).HasColumnName("OVOCE_ZELENINA");

                entity.Property(e => e.Pohlavi)
                    .HasMaxLength(50)
                    .HasColumnName("POHLAVI");

                entity.Property(e => e.Region)
                    .HasMaxLength(50)
                    .HasColumnName("REGION");

                entity.Property(e => e.RokNar).HasColumnName("ROK_NAR");

                entity.Property(e => e.Stres).HasColumnName("STRES");

                entity.Property(e => e.Sys).HasColumnName("SYS");

                entity.Property(e => e.Vaha).HasColumnName("VAHA");

                entity.Property(e => e.Vyska).HasColumnName("VYSKA");
            });

            modelBuilder.Entity<IchsPsc>(entity =>
            {
                entity.ToTable("ICHS_psc");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.Psc).HasColumnName("psc");

                entity.Property(e => e.Region)
                    .HasMaxLength(50)
                    .HasColumnName("REGION");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
