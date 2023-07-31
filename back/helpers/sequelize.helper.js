const USERS_TABLE_NAME = 'USERS';
const PROFILES_TABLE_NAME = 'PROFILES';
const EXPERIENCES_STATUS_TABLE_NAME = 'EXPERIENCES_STATUS';
const EXPERIENCES_TYPES_TABLE_NAME = 'EXPERIENCES_TYPES';
const COUNTRIES_TABLE_NAME = 'COUNTRIES';
const EXPERIENCES_TABLE_NAME = 'EXPERIENCES';
const PROFILES_EXPERIENCES_TABLE_NAME = 'PROFILES_EXPERIENCES';
const REFERENCES_TABLE_NAME = 'WREFERENCES';
const PROFILES_REFERENCES_TABLE_NAME = 'PROFILES_WREFERENCES';
const LANGUAGES_TABLE_NAME = 'LANGUAGES';
const PROFILES_LANGUAGES_TABLE_NAME = 'PROFILES_LANGUAGES';
const SKILLS_TABLE_NAME = 'SKILLS';
const PROFILES_SKILLS_TABLE_NAME = 'PROFILES_SKILLS';
const FORMATIONS_STATUS_TABLE_NAME = 'FORMATIONS_STATUS';
const FORMATIONS_TYPES_TABLE_NAME = 'FORMATIONS_TYPES';
const FORMATIONS_TABLE_NAME = 'FORMATIONS';
const PROFILES_FORMATIONS_TABLE_NAME = 'PROFILES_FORMATIONS';
const MARITALS_TABLE_NAME = 'MARITALS';
const SEXS_TABLE_NAME = 'SEXS';
const OPTIONALS_TABLE_NAME = 'OPTIONALS';
const PROFILES_OPTIONALS_TABLE_NAME = 'PROFILES_OPTIONALS';

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
    name: `fk_${tableName.toLowerCase()}_${targetTableName.toLowerCase()}_${targetColumnName.toLowerCase()}`,
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
  EXPERIENCES_TABLE_NAME,
  PROFILES_EXPERIENCES_TABLE_NAME,
  REFERENCES_TABLE_NAME,
  PROFILES_REFERENCES_TABLE_NAME,
  LANGUAGES_TABLE_NAME,
  PROFILES_LANGUAGES_TABLE_NAME,
  SKILLS_TABLE_NAME,
  PROFILES_SKILLS_TABLE_NAME,
  FORMATIONS_STATUS_TABLE_NAME,
  FORMATIONS_TYPES_TABLE_NAME,
  FORMATIONS_TABLE_NAME,
  PROFILES_FORMATIONS_TABLE_NAME,
  MARITALS_TABLE_NAME,
  SEXS_TABLE_NAME,
  OPTIONALS_TABLE_NAME,
  PROFILES_OPTIONALS_TABLE_NAME,
};
