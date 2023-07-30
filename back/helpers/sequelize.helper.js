const USERS_TABLE_NAME = 'Users';
const PROFILES_TABLE_NAME = 'Profiles';
const EXPERIENCES_STATUS_TABLE_NAME = 'Experiencies_status';
const EXPERIENCES_TYPES_TABLE_NAME = 'Experiences_types';
const COUNTRIES_TABLE_NAME = 'Countries';
const EXPIRIENCES_TABLE_NAME = 'Experiences';
const PROFILES_EXPERIENCES_TABLE_NAME = 'Profiles_experiences';
const REFERENCES_TABLE_NAME = 'References';
const PROFILES_REFERENCES_TABLE_NAME = 'Profiles_references';
const LANGUAGES_TABLE_NAME = 'Languages';
const PROFILES_LANGUAGES_TABLE_NAME = 'Profiles_languages';
const SKILLS_TABLE_NAME = 'Skills';
const PROFILES_SKILLS_TABLE_NAME = 'Profiles_skills';
const FORMATIONS_STATUS_TABLE_NAME = 'Formations_status';
const FORMATIONS_TYPE_TABLE_NAME = 'Formations_types';
const FORMATIONS_TABLE_NAME = 'Formations';
const PROFILES_FORMATIONS_TABLE_NAME = 'Profiles_formations';
const MARITALS_TABLE_NAME = 'Maritals';
const SEXS_TABLE_NAME = 'Sexs';
const OPTIONALS_TABLE_NAME = 'Optionals';
const PROFILES_OPTIONALS_TABLE_NAME = 'Profiles_optionals';

async function addForeingKey(
  queryInterface,
  tableName,
  field,
  targetTableName,
  targetColumnName = 'id',
) {
  await queryInterface.addConstraint(tableName, {
    fields: [field],
    type: 'foreign key',
    name: `FK_${tableName.toLowerCase()}_${targetTableName.toLowerCase()}_${targetColumnName.toLowerCase()}`,
    references: {
      table: targetTableName,
      field: targetColumnName,
    },
    // onDelete: 'cascade',
    // onUpdate: 'cascade',
  });
}

async function addCompositeForeingKey(queryInterface, tableName) {
  await queryInterface.addConstraint(tableName, {
    fields: ['source_column_name', 'other_source_column_name'],
    type: 'foreign key',
    name: 'custom_fkey_constraint_name',
    references: {
      table: 'target_table_name',
      fields: ['target_column_name', 'other_target_column_name'],
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  });
}

module.exports = {
  addForeingKey,
  addCompositeForeingKey,
  USERS_TABLE_NAME,
  PROFILES_TABLE_NAME,
  EXPERIENCES_STATUS_TABLE_NAME,
  EXPERIENCES_TYPES_TABLE_NAME,
  COUNTRIES_TABLE_NAME,
  EXPIRIENCES_TABLE_NAME,
  PROFILES_EXPERIENCES_TABLE_NAME,
  REFERENCES_TABLE_NAME,
  PROFILES_REFERENCES_TABLE_NAME,
  LANGUAGES_TABLE_NAME,
  PROFILES_LANGUAGES_TABLE_NAME,
  SKILLS_TABLE_NAME,
  PROFILES_SKILLS_TABLE_NAME,
  FORMATIONS_STATUS_TABLE_NAME,
  FORMATIONS_TYPE_TABLE_NAME,
  FORMATIONS_TABLE_NAME,
  PROFILES_FORMATIONS_TABLE_NAME,
  MARITALS_TABLE_NAME,
  SEXS_TABLE_NAME,
  OPTIONALS_TABLE_NAME,
  PROFILES_OPTIONALS_TABLE_NAME,
};
