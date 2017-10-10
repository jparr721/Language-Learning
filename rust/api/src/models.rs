#[derive(Queryable)]
pub struct Food {
    pub id: i32,
    pub name: String,
    pub quantity: f64,
    pub units: String,
    
}
