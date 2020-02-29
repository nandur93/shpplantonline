# VS Code Git Workflow
File ini merupakan file pembelajaran unutk bisa menggunakan GitHub sebagai version control system pada VS Code
1. Pastikan Extension terpasang pada VS Code:
    a. Source Control: Git
    b. GitLens
2. Yang pertama kali dilakukan setelah install Source Control: Git adalah membuka Terminal ctrl+shift+`
3. Pastikan directory pada htdocs jika menggunakan XAMPP sebagai services dengan perintah cd C:\xampp\htdocs
4. Kemudian jalankan git clone https://github.com/nandur93/shpplantonline.git untuk Clone repository ke folder htdocs
5. Buka folder shpplantonline di VS Code dan buat file


File baru akan berlambang U (Untracked)
Kemudian klik Source Control:Git atau GitLens dan "Stage Changes" maka file akan pindah ke staged changes
Tapi jika mengubah dokumen yang ada pada stagged changes, maka dokumen baru akan muncul dengan lambang M (Modified)
Jika klik discard changes maka file akan kembali ke semula pada posisi stagged changes dan file berlambang M (Modified) akan hilang
Jika klik stage changes maka file akan mengupdate yang ada di stagged changes dengan file baru yang ada di changes berlambang M (Modified)
Kemudian lambang yang ada pada stagged changes akan berubah menjadi A (Index Added)
Setelah itu klik Commit