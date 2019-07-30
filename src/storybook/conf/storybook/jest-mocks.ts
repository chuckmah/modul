import uuid from '@ulaval/modul-components/dist/utils/uuid/uuid';

// jest.mock('../../../../node_modules/@packages/modul-components/utils/uuid/uuid');
(uuid.generate as jest.Mock).mockReturnValue('uuid');
